import styles from '../WeightList/WeightList.module.css'
import { motion } from 'framer-motion'
import axios from 'axios'

const EntryModal = ({ id, change, closeModal }) => {

  const deleteEntry = () => {
    axios.delete(`/api/weight/${id}`).then((res) => {
      console.log('Entry Deleted')
      closeModal(id)
      change(true)
    })
  }
  
  return (
    <motion.div className={styles.modal_container} onClick={deleteEntry}
      whileHover={{
        scale: 1.03
      }}
    >
      <div className={styles.delete_entry}>
        Delete Entry
      </div>
    </motion.div>
  )
}

export default EntryModal