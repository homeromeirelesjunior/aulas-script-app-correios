const express = require('express')
const Correios = require('node-correios')
const app = express()
const correio = new Correios()
const port = 3002

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`))

app.get('/', (req, res) => {
    console.log('Rota do CEP encontrada!')
    const { cep } = req.query
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