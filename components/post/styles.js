import styled from 'styled-components'

export const Card = styled.article`
  width: 240px;
  border: 1px solid rgba(216, 225, 243, 1);
  border-radius: 8px;
  margin-bottom: 20px;
  color: rgba(0, 27, 69, 1);
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 1200px) {
    width: 230px;
  }
`

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
export const CardName = styled.span`
  font-size: 13px;
  font-weight: bold;
  padding: 13px;
  display: block;
  border-bottom: 1px solid rgba(216, 225, 243, 1);
  @media (min-width: 1200px) {
    font-size: 12px;
  }
`

export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-top: 13px;
  padding-left: 13px;
  padding-right: 13px;
  @media (min-width: 1200px) {
    font-size: 19px;
  }
`
