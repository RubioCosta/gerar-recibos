const styles = `
  body {
    margin: 0;
    padding: 0;
  }

  .main {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 29.7cm;
    min-height: 21cm;
  }

  .main input {
    height: 20px !important;
  }

  .recibo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10.5cm;
    box-sizing: border-box;
  }

  .recibo label {
    color: #000000;
  }

  .area-recibo {
    box-sizing: border-box;
    padding: 5px;
    background-color: #d3d3d3;
    width: 13.8cm;
    height: 9.5cm;
  }

  .area-recibo-cabe {
    box-sizing: border-box;
    background-color: #FFFFFF;
    border: 1.5px solid #6b6a6a;
    border-radius: 5px;
    height: 1cm;
    margin-bottom: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .area-recibo-corpo {
    box-sizing: border-box;
    padding-left: 15px;
    background-color: #FFFFFF;
    border: 1.5px solid #6b6a6a;
    border-radius: 5px;
    height: 8cm;
  }

  /* AREA 1 */
  .text-title {
    margin-right: 10px;
    width: 3cm;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 900;
  }

  .N {
    width: 3cm;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .N label {
    width: 0.5cm;
    font-weight: 900;
    margin-right: 5px;
  }

  .N input {
    font-weight: 900;
    text-align: center;
    box-sizing: border-box;
    padding-left: 5px;
    height: 0.6cm;
    border-radius: 5px;
    width: 2cm;
    outline: 0;
    border: none;
    background-color: #d3d3d3;
    font-size: .6em;
  }

  .valorN {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.5cm;
  }

  .valorN label {
    font-weight: 900;
    margin-right: 5px;
  }

  .valorN input {
    font-weight: 900;
    text-align: center;
    box-sizing: border-box;
    padding-left: 5px;
    height: 0.6cm;
    border-radius: 5px;
    width: 3.5cm;
    outline: 0;
    border: none;
    background-color: #d3d3d3;
    font-size: .6em;
  }

  /* Corpo do recibo */
  .area-1 {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .area-1 label {
    margin-right: 10px;
    font-size: 12px;
  }

  .area-1 input {
    font-size: 12px;
    padding-left: 5px;
    width: 9.7cm;
    border: none;
    outline: 0;
    border-bottom: 1px solid #888484;
  }

  /* Area 2 corpo do recibo */
  .area-2 {
    margin-top: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .area-2 label {
    margin-right: 10px;
    font-size: 12px;
  }

  .area-2 input {
    font-size: 12px;
    padding-left: 5px;
    width: 10.4cm;
    border: none;
    outline: 0;
    background-color: #d3d3d3;
  }

  /* Area - hidden 1 */
  .area-hidden-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
    width: 12.49cm;
    height: 0.4cm;
    font-size: 12px;
    padding-left: 5px;
    border: none;
    outline: 0;
    background-color: #d3d3d3;
  }

  .area-hidden-1 .linha {
    background-color: black;
    height: 0.05cm;
    width: 12cm;
  }

  /* Area 3 corpo do recibo */
  .area-3 {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .area-3 label {
    margin-right: 10px;
    font-size: 12px;
  }

  .area-3 input {
    font-size: 12px;
    padding-left: 5px;
    width: 10.4cm;
    border: none;
    outline: 0;
    border-bottom: 1px solid #888484;
  }

  /* Area - hidden 2 */
  .area-hidden-2 {
    height: 1.7cm;
    margin-bottom: 0;
  }

  .area-hidden-2 input {
    width: 12.3cm;
    font-size: 12px;
    padding-left: 5px;
    border: none;
    outline: 0;
    border-bottom: 1px solid #888484;
  }

  .area-hidden-2 label {
    font-size: 12px;
  }

  /* Area 4 corpo do recibo */
  .area-4 {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .area-4 label {
    margin: 0px 3px 0px 5px;
    font-size: 12px;
  }

  .area-4 input {
    font-size: 12px;
    padding-left: 5px;
    border: none;
    outline: 0;
    border-bottom: 1px solid #888484;
  }

  .area-4 .input-1 {
    width: 4.2cm;
    text-align: center;
  }

  .area-4 .input-2 {
    text-align: center;
    width: 1cm;
  }

  .area-4 .input-3 {
    text-align: center;
    width: 3cm;
  }

  .area-4 .input-4 {
    text-align: center;
    width: 2cm;
  }

  /* Area 5 corpo do recibo */
  .area-5 {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .area-5 label {
    margin-right: 10px;
    font-size: 12px;
  }

  .area-5 input {
    font-size: 12px;
    padding-left: 5px;
    width: 10.4cm;
    border: none;
    outline: 0;
    border-bottom: 1px solid #888484;
  }

  /* Area 6 corpo do recibo */
  .area-6 {
    margin-top: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .area-6 label {
    margin-right: 10px;
    font-size: 12px;
  }

  .area-6 input {
    font-size: 12px;
    padding-left: 5px;
    width: 10.7cm;
    border: none;
    outline: 0;
    border-bottom: 1px solid #888484;
  }

  /* Area 7 corpo do recibo */
  .area-7 {
    margin-top: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .area-7 label {
    margin-right: 10px;
    font-size: 12px;
  }

  .area-7 input {
    font-size: 12px;
    padding-left: 5px;
    width: 5.2cm;
    border: none;
    outline: 0;
    border-bottom: 1px solid #888484;
  }
`

export default styles;