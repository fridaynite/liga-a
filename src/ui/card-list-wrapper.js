import styled from 'styled-components'

export const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &::after {
    content: '';
    display: block;
    margin-left: 250px;
  }
`
