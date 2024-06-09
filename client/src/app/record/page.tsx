'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { ICurrentSplit } from './record'
import styles from './Record.module.css'
import Link from 'next/link'

const Record = () => {
  const [splitName, setSplitName] = useState<ICurrentSplit>()

  useEffect(() => {
    axios.get('/api/splits/current').then((res) => {
      setSplitName(res.data)
    })
  }, [])
  return (
    <>
      <div>
        <h2 className={styles.split_name}>{splitName?.name}</h2>
      </div>

      <div className={styles.log_workout}>
        <Link className={styles.button} href='/record/workout'>
          Start Workout
        </Link>
      </div>
    </>
  )
}

export default Record
