import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { division } from './Operacion';

function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [total, setTotal] = useState(0);

  const calcularResultado = useCallback(() => {
    setTotal(division(numA, numB));
  }, [numA, numB]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <label style={{fontSize: 24, fontFamily :"cursive"}}>Peso (Ej: 60.8): </label>
          <input  
            type='number'   
            min= '0'    
            value={numA}
            style={{fontSize: 24, width: 100, textAlign: 'center'}}
            onChange={(e) => setNumA(+e.target.value)}
          />
          <label style={{fontSize: 24, fontFamily :"cursive"}}>  Estatura(Ej: 1.60): </label>
          <input
            type='number'
            min='0'
            value={numB}
            style={{fontSize: 24, width: 100, textAlign: 'center'}}
            onChange={(e) => setNumB(+e.target.value)}
          />
        </div>
        <div>
          <button
            style={{fontSize: 24, margin: '40px 0', padding: '3px', fontFamily :"cursive"}}
            onClick={calcularResultado}
          >
            Calcular Peso
          </button>
        </div>
        <div>
          <label style={{fontSize: 24, fontFamily :"cursive"}}>Resultado: </label>
          <input
            value={total}
            style={{fontSize: 24, width: 100, textAlign: 'center', backgroundColor: 'white'}}
            disabled
            readOnly
          />
        </div>
        <h3>
          by Dania Lucas - ISI UTN FRRe <br /><br /><br />
        </h3>
      </header>
    </div>
  );
}

export default App;
