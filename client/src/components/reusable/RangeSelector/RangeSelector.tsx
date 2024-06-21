import styles from './RangeSelctor.module.css'
import { RangeSelectorProps } from '@/app/globals'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const RangeSelector = ({ sxContainer }: RangeSelectorProps) => {
  return (
    <div className={styles.container} style={sxContainer}>
      <span>Select a Date Range</span>
      <ExpandMoreIcon />
    </div>
  )
}

export default RangeSelector
