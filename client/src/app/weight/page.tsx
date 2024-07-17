'use client'

import { useEffect, useState } from 'react'
import styles from './Weight.module.css'
import { IWeightData } from '../globals'
import axios from 'axios'
import WeightList from '@/components/isolated/Weight/WeightList/WeightList.tsx'
import Chart from '@/components/reusable/Chart/Chart'

const Weight = () => {
  const [weight, setWeight] = useState<IWeightData[]>([])
  const [weightChange, setWeightChange] = useState<boolean>(false)

  useEffect(() => {
    axios.get('/api/weight').then((res) => {
      console.log('getting weight')
      setWeight(res.data)
      setWeightChange(false)
    })
  }, [weightChange])

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <WeightList weight={weight} setWeightChange={setWeightChange} />

        <Chart weight={weight} />
      </div>
    </div>
  )
}

export default Weight
