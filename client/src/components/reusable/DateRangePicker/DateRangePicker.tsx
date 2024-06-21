import styles from './DateRangePicker.module.css'
import { DateRangePickerProps } from '@/app/globals'
import DatePicker from '../DatePicker/DatePicker'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import RangeSelector from '../RangeSelector/RangeSelector'

const DateRangePicker = ({ sxContainer }: DateRangePickerProps) => {
  const d = convertDate(new Date())
  const [startDate, setStartDate] = useState<any>(dayjs(d))
  const [endDate, setEndDate] = useState<any>(dayjs(d))

  function convertDate(date: Date | Dayjs) {
    const newDate = date.toISOString().substring(0, 10)
    const formattedDate =
      newDate.substring(5, 7) + '/' + newDate.substring(8, 10) + '/' + newDate.substring(0, 4)
    return formattedDate
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container} style={sxContainer}>
        <div className={styles.inputs}>
          <label>Select:</label>
          <RangeSelector />
        </div>
        <div className={styles.start_input}>
          <label style={{ marginLeft: '10px' }}>Start:</label>
          <DatePicker
            convertDate={convertDate}
            date={startDate}
            setDate={setStartDate}
            sxDateInput={{
              margin: '0 0 0 20px',
              width: '180px',
            }}
          />
        </div>
        <div className={styles.end_input}>
          <label style={{ marginLeft: '10px' }}>End:</label>
          <DatePicker
            convertDate={convertDate}
            date={endDate}
            setDate={setEndDate}
            sxDateInput={{
              margin: '0 0 0 20px',
              width: '180px',
            }}
          />
        </div>
      </div>
    </LocalizationProvider>
  )
}

export default DateRangePicker
