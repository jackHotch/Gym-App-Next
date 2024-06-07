import { useEffect, useState } from 'react'
import styles from './Weight.module.css'
import { WeightData } from '../globals'
import axios from 'axios'
import WeightList from '@/components/isolated/Weight/WeightList/WeightList'

const Weight = () => {
  const [weight, setWeight] = useState<WeightData[]>([])
  const [weightChange, setWeightChange] = useState<boolean>(false)
  const arr = new Array(weight.length).fill(false)
  const [hamburger, setHamburger] = useState<boolean[]>(arr)

  useEffect(() => {
    axios.get('/api/weight').then((res) => {
      console.log('getting weight')
      setWeight(res.data)
      setHamburger(arr)
      setWeightChange(false)
    })
  }, [weightChange])

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <WeightList 
          weight={weight} 
          hamburger={hamburger} 
          setHamburger={setHamburger} 
          setWeightChange={setWeightChange} 
        />

        <Chart 
          weight={weight}
        />
      </div>
    </div>
  )
}

export default Weight