import express from 'express'
const router = express.Router()

import { createWorkout, getLastWorkoutNumber } from '../database/Workout.js'

router.post('/create', async (req, res) => {
  const workout = req.body
  await createWorkout(workout)
  res.status(201).send('Workout Created')
})

router.get('/number', async (req, res) => {
  let number = await getLastWorkoutNumber()
  number = parseInt(number) + 1
  res.json(number)
})

export default router