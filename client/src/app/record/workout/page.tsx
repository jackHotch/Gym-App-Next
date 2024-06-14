'use client'

import { useEffect, useState } from 'react'
import styles from '../Record.module.css'
import AddExerciseModal from '@/components/isolated/Record/AddExerciseModal/AddExerciseModal'
import { IExercises } from '../record.ts'
import { TextInputChangeEvent, TextAreaChangeEvent, ButtonEvent } from '@/app/globals'
import Set from '@/components/isolated/Record/Set/Set'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ExerciseModal from '@/components/isolated/Record/ExerciseModal/ExerciseModal'
import axios from 'axios'
import WorkoutConfirmationModal from '@/components/isolated/Record/WorkoutConfirmationModal/WorkoutConfirmationModal.tsx'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const Workout = () => {
  const [exerciseModal, setExerciseModal] = useState<boolean>(false)
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false)
  const [exercises, setExercises] = useState<IExercises[]>([])
  let arr = new Array(exercises.length).fill(false)
  const [hamburger, setHamburger] = useState<boolean[]>(arr)
  const [displayNote, setDisplayNote] = useState<boolean[]>(arr)
  const router = useRouter()
  const [workoutNumber, setWorkoutNumber] = useState<number>(0)

  useEffect(() => {
    axios.get('/api/workout/number').then((res) => {
      setWorkoutNumber(res.data)
    })
  }, [])

  function handleChange(
    e: TextInputChangeEvent,
    exerciseIndex: number,
    setIndex: number,
    name: string
  ) {
    const temp = [...exercises]
    if (name === 'weight') {
      temp[exerciseIndex].sets[setIndex].weight = e.target.value
    } else if (name === 'reps') {
      temp[exerciseIndex].sets[setIndex].reps = e.target.value
    } else if (name === 'rpe') {
      temp[exerciseIndex].sets[setIndex].rpe = e.target.value
    }
    setExercises(temp)
  }

  function addSet(index: number) {
    const temp1 = [...exercises]
    temp1[index].sets.push({ weight: '0', reps: '0', rpe: '' })
    setExercises(temp1)
  }

  function handleSubmit(e: ButtonEvent) {
    e.preventDefault()
    axios.post('/api/workout/create', exercises).then((res) => {
      console.log('Workout Created')
      router.push('/record/workout/finished')
    })
  }

  function changeNotes(
    e: TextAreaChangeEvent,
    defaultHeight: string,
    exerciseNumber: number
  ) {
    if (e) {
      e.target.style.height = defaultHeight
      e.target.style.height = `${e.target.scrollHeight}px`
    }

    const temp = [...exercises]
    temp[exerciseNumber].notes = e.target.value
  }

  function removeSet(exerciseId: number, setId: number) {
    let temp = [...exercises]
    const newSetList = temp[exerciseId].sets.filter((value, id) => {
      if (id !== setId) return value
    })
    temp[exerciseId].sets = newSetList
    setExercises(temp)
  }

  function changeHamburger(id: number) {
    const temp = [...hamburger]
    temp[id] = !hamburger[id]
    setHamburger(temp)
  }

  return (
    <div className={styles.background}>
      <form>
        <div className={styles.container}>
          <h2 className={styles.title}>Workout #{workoutNumber}</h2>
          <div className={styles.exercises}>
            <AnimatePresence>
              {exercises.map((value, key) => {
                return (
                  <motion.div
                    className={styles.single_exercise}
                    key={key}
                    initial={{
                      y: '-100%',
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 60,
                        damping: 12,
                      },
                    }}
                    exit={{
                      x: '100%',
                      opacity: 0,
                      transition: {
                        duration: 0.6,
                      },
                    }}
                  >
                    <div className={styles.exercise_header}>
                      <span className={styles.exercise_name}>{value.name}</span>
                      <MoreVertIcon
                        onClick={() => changeHamburger(key)}
                        className={styles.three_dots}
                      />
                    </div>
                    <div className={styles.hamburger_container}>
                      <AnimatePresence>
                        {hamburger[key] && (
                          <ExerciseModal
                            hamburger={hamburger}
                            setHamburger={setHamburger}
                            ind={key}
                            displayNote={displayNote}
                            setDisplayNote={setDisplayNote}
                            exercises={exercises}
                            setExercises={setExercises}
                          />
                        )}
                      </AnimatePresence>
                    </div>

                    <hr />

                    <div className={styles.set_labels}>
                      <label id={styles.set_label}></label>
                      <label>Weight</label>
                      <label>Reps</label>
                      <label>RPE</label>
                    </div>

                    <AnimatePresence>
                      {value.sets.map((value2, key2) => {
                        return (
                          <Set
                            key={key2}
                            value={value2}
                            exerciseNumber={key}
                            setNumber={key2}
                            handleChange={handleChange}
                            removeSet={removeSet}
                          />
                        )
                      })}
                    </AnimatePresence>

                    <AnimatePresence>
                      {displayNote[key] && (
                        <motion.div
                          className={styles.notes}
                          initial={{
                            y: '-100%',
                            opacity: 0,
                          }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              type: 'spring',
                              stiffness: 80,
                            },
                          }}
                          exit={{
                            y: '-100%',
                            opacity: 0,
                            transition: {
                              duration: 0.15,
                            },
                          }}
                        >
                          <textarea
                            placeholder='Notes...'
                            onChange={(e: TextAreaChangeEvent) =>
                              changeNotes(e, '34px', key)
                            }
                          ></textarea>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      className={styles.add_set}
                      type='button'
                      onClick={() => addSet(key)}
                    >
                      Add Set
                    </button>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
          <div className={styles.add_exercise}>
            <button type='button' onClick={() => setExerciseModal(true)}>
              Add Exercise
            </button>
          </div>

          <div className={styles.finish_workout}>
            <button type='button' onClick={() => setConfirmationModal(true)}>
              Finish Workout
            </button>
          </div>
        </div>
      </form>

      <AnimatePresence>
        {exerciseModal && (
          <AddExerciseModal
            openModal={setExerciseModal}
            exercises={exercises}
            setExercises={setExercises}
          />
        )}
        {confirmationModal && (
          <WorkoutConfirmationModal
            setConfirmationModal={setConfirmationModal}
            handleSubmit={handleSubmit}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Workout
