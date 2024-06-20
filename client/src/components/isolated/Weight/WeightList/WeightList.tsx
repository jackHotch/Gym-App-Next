'use client'

import React, { useState } from 'react'
import styles from './WeightList.module.css'
import { WeightListProps } from '@/app/weight/Weight'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AddWeightModal from '../AddWeightModal/AddWeightModal'
import EntryModal from '../EntryModal/EntryModal'

const WeightList = ({ weight, hamburger, setHamburger, setWeightChange }: WeightListProps) => {
  const [addWeightModal, setAddWeightModal] = useState<boolean>(false)
  let newArray = Array.from({ length: weight.length }, (value, index) => index)
  newArray.reverse()

  const openAddWeightModal = () => setAddWeightModal(true)

  const closeAddWeightModal = () => setAddWeightModal(false)

  const closeEntryModal = (id: number) => {
    const temp = [...hamburger]
    temp[id] = false
    setHamburger(temp)
  }

  const changeHamburger = (id: number) => {
    const temp = [...hamburger]
    temp[id] = !hamburger[id]
    setHamburger(temp)
  }

  return (
    <div className={styles.container}>
      <h2>Weight</h2>
      <div className={styles.add_btn_div}>
        <span className={styles.add_btn} onClick={openAddWeightModal}>
          +
        </span>
      </div>
      <div className={styles.list}>
        <div className={styles.list_sub_headings}>
          <span id={styles.number_head}>#</span>
          <span id={styles.weight_head}>lbs</span>
          <span id={styles.date_head}>Date</span>
        </div>
        <div className={styles.list_entries}>
          {[...weight].reverse().map((value, key) => {
            return (
              <div key={key} className={styles.entry}>
                <span className={styles.number}>#{newArray[key] + 1}</span>
                <span className={styles.weight}>{value.weight} lbs</span>
                <span className={styles.date}>{value.date}</span>
                <span>
                  <MoreVertIcon id={styles.three_dots} onClick={() => changeHamburger(key)} />
                </span>
                <div className={styles.entry_modal}>
                  {hamburger[key] && (
                    <EntryModal
                      id={value.id}
                      change={setWeightChange}
                      closeModal={closeEntryModal}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {addWeightModal && (
        <AddWeightModal closeModal={closeAddWeightModal} change={setWeightChange} />
      )}
    </div>
  )
}

export default WeightList
