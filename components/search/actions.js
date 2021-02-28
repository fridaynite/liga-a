export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'

export const setSearchValue = (value) => {
  return {
    type: SET_SEARCH_VALUE,
    payload: value,
  }
}
