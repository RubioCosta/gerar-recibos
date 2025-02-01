import { styled } from 'styled-components'

export const StyledDiv = styled.div`
  padding: 5px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  background-color: #FFF;
  width: 100%;
  height: calc( 100vh - 60px ) ;

  h3 {
    font-weight: 700;
    border-bottom: 4px solid rgb(64, 17, 233);
    padding-bottom: 5px;
    margin-bottom: 10px;
  }

  form {
    margin-bottom: 5px;
  }

`
