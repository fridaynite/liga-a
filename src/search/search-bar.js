import React from 'react'
import { useDispatch } from 'react-redux'

import { SearchField } from '../ui/search-field'

import { setSearchValue } from './actions'

function SearchBar() {
  const dispatch = useDispatch()

  function handleChange(event) {
    const val = setSearchValue(event.target.value)

    dispatch(val)
  }

  return <SearchField onChange={handleChange} placeholder="Поиск" />
}

export default SearchBar
