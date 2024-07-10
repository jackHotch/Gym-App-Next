import styles from './RangeList.module.css'
import { RangeListProps } from '@/app/globals'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getDate } from '@/libs/libs'
import { getWeightByRange } from '@/actions/Weight/actions'

interface optionsProps {
  text: string
  startDate: string
  endDate: string
}

const RangeList = ({ setSelection, close }: RangeListProps) => {
  const today = getDate(0)

  const options: optionsProps[] = [
    { text: 'No Selection', startDate: '', endDate: '' },
    { text: '1 week', startDate: getDate(1, 'w'), endDate: today },
    { text: '1 month', startDate: getDate(1, 'm'), endDate: today },
    { text: '2 months', startDate: getDate(2, 'm'), endDate: today },
    { text: '3 months', startDate: getDate(3, 'm'), endDate: today },
    { text: '6 months', startDate: getDate(6, 'm'), endDate: today },
    { text: '1 year', startDate: getDate(1, 'y'), endDate: today },
    { text: 'Since Start Date', startDate: '', endDate: today },
  ]

  const selectOption = (value: optionsProps) => {
    setSelection(value.text)

    close()
  }

  return (
    <div className={styles.container}>
      {options.map((value, key) => {
        return (
          <div className={styles.list_item} key={key} onClick={() => selectOption(value)}>
            {value.text}
          </div>
        )
      })}
    </div>
  )
}

export default RangeList
