import express from 'express'
const router = express.Router()

import { getCurrentSplit, getAllSplits } from '../database/Splits.js'

router.get('/', async (req, res) => {
  const rows = await getAllSplits()
  res.json(rows)
})

router.get('/current', async (req, res) => {
  const row = await getCurrentSplit()
  res.json(row)
})

export default router