import express from 'express'
const router = express.Router()

import { createEntry, getAllWeight, getWeight, deleteEntry } from '../database/Weight.js'

router.get('/', async (req, res) => {
  const rows = await getAllWeight()
  res.json(rows)
})

router.post('/', async (req, res) => {
  const weight = req.body.weight
  const date = req.body.date
  await createEntry(weight, date)
  res.status(201).send("New Weight Entry Created")
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const row = await getWeight(id)
  res.send(row)
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  await deleteEntry(id)
  res.status(204).send('Entry Deleted')
})

export default router