import { styled } from 'styled-components'

export const StyledDiv = styled.div`
  width: 100%;
  flex: 1;
  
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-weight: 700;
    background-color:rgb(64, 17, 233);
    color: white;
    height: 30px;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
  }

  .login-google {
    background-color:rgb(36, 6, 143);
  }

  .bi-google {
    margin-right: 5px;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`