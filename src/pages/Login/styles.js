import { styled } from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .text-login {
    font-size: 1.8em;
    margin-bottom: 20px;
    font-weight: 800;
    padding-bottom: 5px;
    border-bottom: 3px solid rgb(64, 17, 233);
  }

  .area-login {
    width: 400px;
    min-height: 200px;
    margin: 0px 10px 0px 10px;
    background-color: white;
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
  }

  hr {
    background-color: #DDDDDD;
    margin: 10px 0px;
    width: 100%;
    height: 3px;
    border: none;
  }

  .footer-login {
    text-align: center;
    margin-top: 15px;
    font-weight: 800;
  }
`;
