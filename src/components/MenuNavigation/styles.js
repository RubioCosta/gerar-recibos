import { styled } from 'styled-components'

export const StyledDiv = styled.div` 
  header {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: rgb(64, 17, 233);
  }

  nav, a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    flex-direction: column;
    flex: 1;
    height: 60px;
    text-decoration: none;
    color: #FFFFFF;
  }

  a:hover {
    background-color: rgb(87, 44, 243);;
  }

  i {
    margin-bottom: 5px;
  }
`
