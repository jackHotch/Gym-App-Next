'use client'

import styles from './Weight.module.css'
import WeightList from '@/components/isolated/Weight/WeightList/WeightList.tsx'
import Chart from '@/components/reusable/Chart/Chart'
import { useWeight } from '@/hooks/api/useWeight'

const Weight = () => {
  const { data } = useWeight()

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <WeightList weight={data} />

        <Chart weight={data} />
      </div>
    </div>
  )
}

export default Weight
