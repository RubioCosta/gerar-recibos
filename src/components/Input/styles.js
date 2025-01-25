import { styled } from 'styled-components'

export const StyledDiv = styled.div`
  input {
    outline: none;
    border: none;
    width: 100%;
    height: 30px;
    background-color:rgb(235, 230, 230);
    padding-left: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`