'use client'

import styles from './EntryModal.module.css'
import { EntryModalProps } from '@/app/weight/Weight.ts'
import { motion } from 'framer-motion'
import axios from 'axios'

const EntryModal = ({ id, change }: EntryModalProps) => {
  const deleteEntry = () => {
    axios.delete(`/api/weight/${id}`).then((res) => {
      console.log('Entry Deleted')
      change()
    })
  }

  return (
    <motion.div
      className={styles.modal_container}
      onClick={deleteEntry}
      whileHover={{
        scale: 1.03,
      }}
    >
      <div className={styles.delete_entry}>Delete Entry</div>
    </motion.div>
  )
}

export default EntryModal
