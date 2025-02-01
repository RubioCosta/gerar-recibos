import { styled } from 'styled-components'

export const StyledDiv = styled.div`
  margin-top: 10px;

  .form-search {
    display: flex;
    border-top: 2px solid rgb(147, 117, 255);
    padding: 5px 0px 5px 0px;
    height: 43px;
  }

  .input {
    margin-right: 5px;
  }

  .list {
    overflow: auto;
    max-height: calc( 100vh - 405px );
  }

  .list::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  .item {
    box-shadow: 0px 0px 3px #AAA;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .item:hover {
    background-color: #DDD;
  }

  .item-data {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 5px;
    flex: 6;
  }

  .item-data .name {
    font-weight: 600;
  }

  .item-data .school {
    font-weight: 300;
    font-size: 0.8em;
    margin-bottom: 3px;
  }

  .item-data .value {
    font-size: 0.8em;
    padding: 2px;
    font-weight: 500;
    border-radius: 5px;
    max-width: 200px;
  }

  hr {
    border: 0;
    border-top: 1px solid rgb(147, 117, 255);
  }

  .item-whats {
    flex: 1;
    background-color:rgb(26, 175, 26);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    min-height: 80px;
  }

  a:hover {
    background-color: transparent;
  }

  .active {
    background-color:rgb(74, 240, 135);
  }

  .inactive {
    background-color: #FA8072;
  }
`
