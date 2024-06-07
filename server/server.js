import express from 'express'
const app = express()
const port = 8080

app.use(express.json())

// Routes
import exerciseRouter from './routes/Exercises.js'
app.use('/api/exercises', exerciseRouter)

import splitsRouter from './routes/Splits.js'
app.use('/api/splits', splitsRouter)

import weightRouter from './routes/Weight.js'
app.use('/api/weight', weightRouter)

import workoutRouter from './routes/Workout.js'
app.use('/api/workout', workoutRouter)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})