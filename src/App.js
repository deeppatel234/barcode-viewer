import React, { useState } from 'react';
import Barcode from 'react-barcode';
import './App.css';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


function App() {
  const [barcodeValue, setBarcodeValue] = useState('Hello World');
  const [barcodeMargin, setBarcodeMargin] = useState(2);
  const [barcodeHeight, setBarcodeHeight] = useState(100);

  const onChangeBarcode = ({ target }) => {
    setBarcodeValue(target.value);
  };

  return (
    <div className="App">
      <input id="barcodeInput" value={barcodeValue} onChange={onChangeBarcode} />
      <div id="barcode-wrapper">
        <Barcode value={barcodeValue} width={barcodeMargin} height={barcodeHeight}/>
      </div>
      <div id="slider-wrapper">
        width
        <Slider min={1} max={7} value={barcodeMargin} onChange={setBarcodeMargin} />
      </div>
      <div id="slider-wrapper">
        height
        <Slider min={90} max={200} value={barcodeHeight} onChange={setBarcodeHeight} />
      </div>
    </div>
  );
}

export default App;
