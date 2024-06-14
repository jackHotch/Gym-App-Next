'use client'

import { WorkoutConfirmationModalProps } from '@/app/record/record'
import styles from './WorkoutConfirmationModal.module.css'
import { motion } from 'framer-motion'

const WorkoutConfirmationModal = ({
  setConfirmationModal,
  handleSubmit,
}: WorkoutConfirmationModalProps) => {
  const modalVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 16,
      },
    },
    exit: {
      scale: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <div className={styles.modal_background}>
      <motion.div
        className={styles.modal_container}
        variants={modalVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <h4>Are You Sure You Want to Finish Your Workout?</h4>
        <div className={styles.buttons}>
          <button onClick={(e) => handleSubmit(e)}>Finish Workout</button>
          <button onClick={() => setConfirmationModal(false)}>Cancel</button>
        </div>
      </motion.div>
    </div>
  )
}

export default WorkoutConfirmationModal
