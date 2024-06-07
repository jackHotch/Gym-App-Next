import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '12345',
    database: 'gym_app',
  }).promise()


export async function getAllExercises() {
  const [rows] = await pool.query(`SELECT * FROM exercises`)
  return rows
}

export async function createExercise(name) {
  await pool.query("INSERT INTO `exercises` (`name`) VALUES (?)", [name])
}