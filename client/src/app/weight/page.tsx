'use client'

import { useState } from 'react'
import styles from './Weight.module.css'
import WeightList from '@/components/isolated/Weight/WeightList/WeightList.tsx'
import Chart from '@/components/reusable/Chart/Chart'
import { useWeight } from '@/hooks/api/useWeight/useWeight'

const Weight = () => {
  const { data, refetch } = useWeight()
  const arr = new Array(data?.length).fill(false)
  const [hamburger, setHamburger] = useState<boolean[]>(arr)

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <WeightList
          weight={data}
          hamburger={hamburger}
          setHamburger={setHamburger}
          refresh={refetch}
        />

        <Chart />
      </div>
    </div>
  )
}

export default Weight
