import express from 'express'
const router = express.Router()

import { getAllExercises, createExercise } from '../database/Exercises.js'

router.get('/', async (req, res) => {
  const rows = await getAllExercises()
  res.json(rows)
})

router.post('/create', async (req, res) => {
  const name = req.body.name
  await createExercise(name)
  res.status(201).send("Exercise Created")
})

export default router