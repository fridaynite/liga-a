import styled from 'styled-components'

export const Container = styled.div`
  width: 280px;
  padding: 0 20px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 640px;
    padding: 0 64px;
  }
  @media (min-width: 1200px) {
    width: 960px;
    padding: 0 120px;
  }
`
