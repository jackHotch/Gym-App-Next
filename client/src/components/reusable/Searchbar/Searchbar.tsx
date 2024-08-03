'use client'

import { useState, useEffect, useRef } from 'react'
import { SearchbarProps, TextInputChangeEvent } from '@/app/globals'
import { IExercises } from '@/app/globals'
import styles from './Searchbar.module.css'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const Searchbar = ({
  placeholder,
  data,
  newExercise,
  setNewExercise,
}: SearchbarProps) => {
  const [filteredData, setFilteredData] = useState<IExercises[] | undefined>([])
  const [wordEntered, setWordEntered] = useState<string>('')
  let searchRef = useRef<any>()

  function handleFilter(e: TextInputChangeEvent) {
    const searchWord = e.target.value
    setWordEntered(searchWord)
    const newFilter = data?.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') setFilteredData([])
    else setFilteredData(newFilter)
  }

  function clearInput() {
    setFilteredData([])
    setWordEntered('')
  }

  function handleClick(name: string) {
    setNewExercise([
      ...newExercise,
      { name: name, sets: [{ weight: '', reps: '', rpe: '' }], notes: '' },
    ])
  }

  useEffect(() => {
    let handler = (e: any) => {
      if (!searchRef.current.contains(e.target)) {
        setFilteredData([])
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <div ref={searchRef}>
      <div className={styles.search_inputs}>
        <input
          type='text'
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className={styles.search_icon}>
          {!wordEntered ? (
            <SearchIcon />
          ) : (
            <CloseIcon id={styles.clear_btn} onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData?.length != 0 && (
        <div className={styles.data}>
          {filteredData?.map((value, key) => {
            return (
              <div
                className={styles.data_item}
                key={key}
                onClick={() => handleClick(value.name)}
              >
                {value.name}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Searchbar
