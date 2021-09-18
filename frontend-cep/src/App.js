import React, { useState }  from 'react'
import './App.css';
import CepConsultado from './CepConsultado';

// const url = `https://viacep.com.br/ws/${data.cep}/json/`;

function App() {

  const [evento, setEvento] = useState([])

  const submitHandler = e => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    console.log(`Nome recebido: ${data.nome}`)
    console.log(`CEP recebido: ${data.cep}`)
    
    fetch(`http://localhost:3002/?cep=${data.cep}`)
      .then(response => response.json())
      .then(data => {
        const array = convertToArray(data)
        setEvento(array)
      })
      .catch(error => console.log(error))
  }

  const convertToArray = obj => {
    const arr = [obj]
    return arr
  }
  

  return (
    <div className="container">
      <h1>Buscar CEP</h1>
      <form onSubmit={submitHandler}>

        <div className="form-group" id="nome">
          <input type="text" name="nome" className="form-control" />
        </div>

        <div className="form-group" id="cep"> 
          <input type="text" name="cep" className="form-control" />
        </div>

        <button type="submit" id="consultar" className="btn btn-success">Consultar CEP</button>


      </form>

      <div>
        <CepConsultado evento = {evento} />
      </div>

    </div>
  );
}

export default App;
