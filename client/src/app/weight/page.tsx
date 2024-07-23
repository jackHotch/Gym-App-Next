'use client'

import { useEffect, useState } from 'react'
import styles from './Weight.module.css'
import { IWeightData } from '../globals'
import axios from 'axios'
import WeightList from '@/components/isolated/Weight/WeightList/WeightList.tsx'
import Chart from '@/components/reusable/Chart/Chart'
import { useWeight } from '@/hooks/api/useWeight'

const Weight = () => {
  const { data, refetch } = useWeight()

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <WeightList weight={data} refresh={refetch} />

        <Chart weight={data} />
      </div>
    </div>
  )
}

export default Weight
