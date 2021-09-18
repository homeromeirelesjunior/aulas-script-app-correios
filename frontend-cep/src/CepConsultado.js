import React from 'react'
import './estilos/estilos.css'



function CepConsultado({evento}) {

    if ( !evento || evento.length === 0) return null

    return (
        <>
            <h1>Cep encontrado</h1>

            <ul className="list-group">
                {evento.map(item =>
                    <li className="list-group" key={item.cep}>                       
                        <span> CEP {item.cep}</span>    
                        <span> Logradouro: {item.logradouro}</span>
                        <span> Bairro: {item.bairro}</span>
                        <span> Localidade: {item.localidade}</span>
                        <span> UF: {item.uf}</span>
                    </li>
                )}
            </ul>
        </>
    )
}

export default CepConsultado;