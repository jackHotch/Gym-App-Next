import styles from './RangeSelctor.module.css'
import RangeButton from './RangeButton/RangeButton'
import RangeList from './RangeList/RangeList'
import { useToggle } from '@/hooks/useToggle/useToggle'
import { useState } from 'react'

const RangeSelector = () => {
  const [selection, setSelection] = useState<string>('3 months')
  const [isListVisible, toggleList, openList, closeList] = useToggle()

  return (
    <>
      <RangeButton selection={selection} toggle={toggleList} />
      {isListVisible && <RangeList setSelection={setSelection} close={closeList} />}
    </>
  )
}

export default RangeSelector
