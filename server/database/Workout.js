import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '12345',
    database: 'gym_app',
  }).promise()


export async function getLastWorkoutNumber() {
    const [number] = await pool.query("SELECT `Workout Number` FROM `workouts` ORDER BY id DESC LIMIT 1")
    return number[0]['Workout Number']
}

export async function createWorkout(workout) {
    const rows = []
    const d = new Date()
    const date = d.toLocaleDateString()
    const time = d.toTimeString().substring(0, 8)
    let workoutNumber = await getLastWorkoutNumber()
    workoutNumber = parseInt(workoutNumber) + 1
    workout.map((value, key) => {
        const name = value.name
        const notes = value.notes
        value.sets.map((set, i) => {
        const newRow = []
        newRow.push(date)
        newRow.push(time)
        newRow.push(workoutNumber)
        newRow.push(name)
        newRow.push(i + 1)
        newRow.push(set.weight)
        newRow.push(set.reps)
        newRow.push(notes)
        newRow.push(set.rpe)
        rows.push(newRow)
        })
    })

    for (let i = 0; i < rows.length; i++) {
        await pool.query("insert into `workouts` (`Date`, `Start Time`, `Workout Number`, `Exercise Name`, `Set Order`, `Weight`, `Reps`, `Notes`, `RPE`) values (?, ?, ?, ?, ?, ?, ?, ?, ?)", rows[i])   
    }
}