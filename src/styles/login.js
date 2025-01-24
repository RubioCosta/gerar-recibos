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

  .area-login {
    width: 400px;
    height: 500px;
    margin: 0px 10px 0px 10px;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
  }
`;
