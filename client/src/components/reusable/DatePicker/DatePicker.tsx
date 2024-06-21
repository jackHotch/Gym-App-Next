import { useRef, useState } from 'react'
import { DatePickerProps } from '@/app/globals'
import styles from './DatePicker.module.css'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const DatePicker = ({
  convertDate,
  date,
  setDate,
  sxDateInput,
  sxCalendarBackground,
}: DatePickerProps) => {
  const startCalendarRef = useRef<any>()
  const [calendar, setCalendar] = useState(false)

  const toggleCalendar = () => {
    console.log('toggle')
    setCalendar(!calendar)
  }

  return (
    <>
      <div className={styles.date_input} style={sxDateInput} onClick={toggleCalendar}>
        <input type='text' value={convertDate(date)} readOnly={true} />
        <CalendarMonthIcon id={styles.calendar_icon} />
      </div>

      <div ref={startCalendarRef}>
        {calendar && (
          <div
            className={styles.calendar_background}
            style={sxCalendarBackground}
            onClick={(e) => e.stopPropagation()}
          >
            <DateCalendar value={date} onChange={(newDate) => setDate(newDate)} />
          </div>
        )}
      </div>
    </>
  )
}

export default DatePicker
