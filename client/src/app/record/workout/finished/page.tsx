'use client'

import { useEffect, useState } from 'react'
import styles from './Finished.module.css'
import Link from 'next/link'
import axios from 'axios'

const finished = () => {
  const [workoutNumber, setWorkoutNumber] = useState<number>(0)

  useEffect(() => {
    axios.get('/api/workout/number').then((res) => {
      setWorkoutNumber(res.data)
    })
  }, [])

  return (
    <div className={styles.created}>
      <p>Workout #{workoutNumber} Recorded!</p>
      <Link className={styles.home_link} href={'/record'}>
        Done
      </Link>
    </div>
  )
}

export default finished
