import './App.css';
import {useState} from 'react'
function App() {
  
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () =>{
    setResultado(num1+ parseInt(num2));
  }

  const restar = () =>{
    setResultado( parseInt(num1) - parseInt(num2));
  }

  const multiplicar = () =>{
    setResultado(parseInt(num1) * parseInt(num2));
  }



  return (
    <div className="App">
    
    <h1>Calculadora</h1>
       
       <input 
       type="text"
       placeholder="ingresa un numero"
       value={num1}
       onChange={e =>setNum1(e.target.value)}
       className="inputfield"
       />

       <input 
       type="text" 
       placeholder="ingresa un numero"
       value={num2}
       onChange={e =>setNum2(e.target.value)}
       className="inputfield"
       />

       <br/>

       <button onClick={sumar}> sumar </button>
       <button onClick={restar}> restar </button>
       <button onClick={multiplicar}> multiplicar </button>

       <p className="textoresultado">{resultado}</p>
        
    </div>
  );
}

export default App;
