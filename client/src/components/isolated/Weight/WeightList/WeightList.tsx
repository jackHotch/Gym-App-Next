'use client'

import React, { useState } from 'react'
import styles from './WeightList.module.css'
import { WeightListProps } from '@/app/weight/Weight'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AddWeightModal from '../AddWeightModal/AddWeightModal'
import EntryModal from '../EntryModal/EntryModal'
import { useToggle } from '@/hooks/useToggle/useToggle'
import { useArrayToggle } from '@/hooks/useArrayToggle/useArrayToggle'

const WeightList = ({ weight, setWeightChange }: WeightListProps) => {
  const [isAWMVisible, _, openAWM, closeAWM] = useToggle()
  const arr: boolean[] = new Array(weight.length).fill(false)
  const [isEntryVisible, toggleEntry, __, closeEntry] = useArrayToggle(arr)
  let newArray = Array.from({ length: weight.length }, (value, index) => index)
  newArray.reverse()

  return (
    <div className={styles.container}>
      <h2>Weight</h2>
      <div className={styles.add_btn_div}>
        <span className={styles.add_btn} onClick={openAWM}>
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
                  <MoreVertIcon id={styles.three_dots} onClick={() => toggleEntry(key)} />
                </span>
                <div className={styles.entry_modal}>
                  {isEntryVisible[key] && (
                    <EntryModal id={value.id} change={setWeightChange} closeModal={closeEntry} />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {isAWMVisible && <AddWeightModal closeModal={closeAWM} change={setWeightChange} />}
    </div>
  )
}

export default WeightList
