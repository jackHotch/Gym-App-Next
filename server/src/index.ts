import express from 'express'
const app = express()
const port = 8080

app.use(express.json())

import exerciseRouter from './routes/Exercises.ts'
app.use('/api/exercises', exerciseRouter)

import splitsRouter from './routes/Splits.ts'
app.use('/api/splits', splitsRouter)

import weightRouter from './routes/Weight.ts'
app.use('/api/weight', weightRouter)

import workoutRouter from './routes/Workouts.ts'
app.use('/api/workout', workoutRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
