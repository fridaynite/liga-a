import styled from 'styled-components'

export const SearchField = styled.input`
  height: 48px;
  width: 100%;
  padding-left: 64px;
  padding-right: 64px;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 100px;
  border: 1px solid rgba(216, 225, 243, 1);
  font-size: 15px;
  color: rgba(0, 27, 69, 1);
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  &::placeholder {
    color: rgba(216, 225, 243, 1);
  }
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`
