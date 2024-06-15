'use client'

import { useEffect, useState } from 'react'
import { AddExerciseModalProps, IAllExercises, IExercises } from '@/app/record/record'
import axios from 'axios'
import styles from './AddExerciseModal.module.css'
import Searchbar from '@/components/reusable/Searchbar/Searchbar'
import CloseIcon from '@mui/icons-material/Close'
import CreateNewExerciseModal from '../CreateNewExerciseModal/CreateNewExerciseModal'
import { motion, AnimatePresence } from 'framer-motion'

const AddExerciseModal = ({
  openModal,
  exercises,
  setExercises,
}: AddExerciseModalProps) => {
  const [allExercises, setAllExercises] = useState<IAllExercises[]>([])
  const [newExercises, setNewExercises] = useState<IExercises[]>([])
  const [modal, setModal] = useState<boolean>(false)
  const [exercisesChanged, setExercisesChanged] = useState<boolean>(false)

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

  function closeModal() {
    openModal(false)
  }

  function removeExercise(i: number) {
    const temp = [...newExercises]
    temp.splice(i, 1)
    setNewExercises(temp)
  }

  function addExercises() {
    let temp = [...exercises]
    temp = temp.concat(newExercises)
    setExercises(temp)
    openModal(false)
  }

  useEffect(() => {
    axios.get('/api/exercises').then((res) => {
      setAllExercises(res.data)
      setExercisesChanged(false)
    })
  }, [exercisesChanged])

  return (
    <div className={styles.modal_background} onClick={closeModal}>
      <motion.div
        className={styles.modal_container}
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className={styles.header}>
          <button className={styles.create_exercise} onClick={() => setModal(true)}>
            Create New Exercise
          </button>
          <button onClick={closeModal}>
            {' '}
            <CloseIcon id={styles.top_clear_btn} />{' '}
          </button>
        </div>
        <div className={styles.textbox}>
          <Searchbar
            placeholder='Add Exercise'
            data={allExercises}
            newExercise={newExercises}
            setNewExercise={setNewExercises}
          />
        </div>
        <div className={styles.future_exercise_list}>
          {newExercises.map((value, key) => {
            return (
              <div key={key} className={styles.future_exercise}>
                {value.name}
                <span
                  className={styles.exercises_clear_btn}
                  onClick={() => removeExercise(key)}
                >
                  X
                </span>
              </div>
            )
          })}
        </div>
        <div className={styles.footer_btns}>
          <button onClick={closeModal}>Cancel</button>
          <button id={styles.add_btn} onClick={addExercises}>
            Add
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {modal && (
          <CreateNewExerciseModal
            setModal={setModal}
            setExercisesChanged={setExercisesChanged}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default AddExerciseModal
