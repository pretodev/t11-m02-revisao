const eventos = require('./eventos')

const express = require('express')
const eventoController = require("./controllers/evento-controller")

const servidor = express()
servidor.use(express.json())

servidor.get('/ver-meu-evento', (req, res) => {
    const {nome, descricao} = eventos[0]
    return res.send(`
        <h1>${nome} </h1>
        <p>${descricao}</p>
    `)
})

// Método GET - Pega dados do recurso
servidor.get('/eventos', eventoController.pegarTodosEventos)
servidor.get('/eventos/:posicao', eventoController.pegarEvento)

// POST  - Cria um recursos
servidor.post('/eventos', eventoController.criaEvento)


// PUT - Cria ou Atualizar um recursos
// PUT /eventos {id: 1, nome: "...", ...}
// PUT /eventos {nome: "...", ...}
// PATCH - Atualiza evento de forma pacial
// PATCH /eventos/1/nome {}
// DELETE - Apaga dados
// DELETE /eventos/1




servidor.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000')
})
