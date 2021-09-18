const express = require('express')
const Correios = require('node-correios')
const server = express()
const cors = require('cors')
const correio = new Correios()
const port = 3002

server.use(cors())

server.listen(port, () => console.log(`Servidor rodando na porta: ${port}`))

server.get('/', (req, res) => {
    const { cep } = req.query
    
    console.log('Rota do CEP encontrada!')
    console.log(cep)

    correio.consultaCEP({ cep: cep })
        .then(result => {
            res.send(result)
            console.log(result)
            console.log('Sucesso!')
        })
        .catch(error => {
            console.log(`Ocorreu um erro: ${error}`)
        })
})