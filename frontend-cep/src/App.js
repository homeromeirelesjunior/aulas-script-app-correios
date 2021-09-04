import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const submitHandler = event => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log(`CEP recebido: ${data.cep}`)
    
    fetch(`http://localhost:3002/?cep=${data.cep}`)
      .then(response => response.json())
      .then(console.log)
  }
  

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input type="text" name="cep" className="form-control" style={{marginTop: '5px'}}/>
        </div>

        <button type="submit" id="consultar" className="btn btn-success">Consultar CEP</button>

      </form>
    </div>
  );
}

export default App;
