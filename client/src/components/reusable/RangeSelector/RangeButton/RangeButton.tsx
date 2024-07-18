import styles from './RangeButton.module.css'
import { RangeButtonProps } from '@/app/globals'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const RangeButton = ({ toggle, selection, sxContainer }: RangeButtonProps) => {
  return (
    <div className={styles.container} style={sxContainer} onClick={toggle}>
      <span>{selection}</span>
      <ExpandMoreIcon />
    </div>
  )
}

export default RangeButton
