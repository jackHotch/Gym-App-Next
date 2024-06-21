'use client'

import { useState } from 'react'
import styles from './AddWeightModal.module.css'
import { AddWeightModalProps } from '@/app/weight/Weight'
import { FormEvent, TextInputChangeEvent } from '@/app/globals'
import axios from 'axios'
import CloseIcon from '@mui/icons-material/Close'
import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import DatePicker from '@/components/reusable/DatePicker/DatePicker'

const AddWeightModal = ({ closeModal, change }: AddWeightModalProps) => {
  const [weight, setWeight] = useState('')
  const d = convertDate(new Date())
  const [date, setDate] = useState<any>(dayjs(d))

  function convertDate(date: Date | Dayjs) {
    const newDate = date.toISOString().substring(0, 10)
    const formattedDate =
      newDate.substring(5, 7) + '/' + newDate.substring(8, 10) + '/' + newDate.substring(0, 4)
    return formattedDate
  }

  const updateWeight = (e: TextInputChangeEvent) => {
    setWeight(e.target.value)
  }

  // useEffect(() => {
  //   let handler = (e: any) => {
  //     if (!calendarRef.current.contains(e.target)) {
  //       if (e.target.className !== 'date_input') {
  //         setCalendar(false)
  //       }
  //     }
  //   }
  //   document.addEventListener('mousedown', handler)

  //   return () => {
  //     document.removeEventListener('mousedown', handler)
  //   }
  // })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const d = convertDate(date)
    const data = { weight: weight, date: d }
    axios.post('/api/weight', data).then((res) => {
      console.log('Weight Added')
      closeModal()
      change(true)
    })
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.modal_background} onClick={closeModal}>
        <form onSubmit={handleSubmit}>
          <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
              <div className={styles.close_btn}>
                <CloseIcon onClick={closeModal} />
              </div>
              <h4>New Entry</h4>
            </div>

            <div className={styles.entry}>
              <div className={styles.weight}>
                <label>Weight: </label>
                <div className={styles.weight_input}>
                  <input type='text' placeholder='lbs' value={weight} onChange={updateWeight} />
                </div>
              </div>

              <div className={styles.date}>
                <label>Date: </label>
                <DatePicker convertDate={convertDate} date={date} setDate={setDate} />
              </div>
            </div>

            <button type='submit' className={styles.add_btn}>
              Add
            </button>
          </div>
        </form>
      </div>
    </LocalizationProvider>
  )
}

export default AddWeightModal
