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
        <div id='Parrafo'> 
          La Organización Mundial de la Salud estima que un peso saludable es el que se sitúa entre valores de 18,5 y 24,9.<br/>
          Los valores inferiores a 18,5 nos indican un peso demasiado bajo.<br/>
          Si son iguales o superiores a 25 se consideraría ya sobrepeso. <br/>
          Si supera los 30 se trata de obesidad. <br/>
        </div>
        <div>
          <label style={{fontSize: 25, fontFamily :'serif'}}>Peso Actual: </label>
          <input  
            type='number'   
            min= '0'    
            value={numA}
            style={{fontSize: 20, width: 90, textAlign: 'center'}}
            onChange={(e) => setNumA(+e.target.value)}
          />
          <label style={{fontSize: 25, marginLeft: 30, fontFamily:'serif' }}>  Estatura: </label>
          <input
            type='number'
            min='0'
            value={numB}
            style={{fontSize: 20, width: 90, textAlign: 'center'}}
            onChange={(e) => setNumB(+e.target.value)}
          />
          <button
            style={{fontSize: 20, margin: '30px 0', marginLeft: 35, padding: '3px', backgroundColor: 'white', fontFamily :'serif'}}
            onClick={calcularResultado}
          >
             Calcular Peso 
          </button>
        </div>
        <div>
          <label style={{fontSize: 25, fontFamily :'serif'}}>Resultado: </label>
          <input
            value={total}
            style={{fontSize: 20, width: 100, textAlign: 'center', backgroundColor: 'white'}}
            disabled
            readOnly
          />
        </div>
        <div>
        <h3> <br/><br/><br/><br/>
          by Dania Lucas - ISI UTN FRRe <br /><br /><br />
        </h3>
        </div>
      </header>
      
    </div>
  );
}

export default App;
