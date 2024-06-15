import styles from './Finished.module.css'
import Link from 'next/link'

const finished = () => {
  return (
    <div className={styles.created}>
      <p>Workout #501 Recorded!</p>
      <Link className={styles.home_link} href={'/record'}>
        Done
      </Link>
    </div>
  )
}

export default finished
