const eventos = require('../eventos')

// module.exports = {

//     pegarTodosEventos: (req, res) => {
//         const nomesEventos = eventos.map((e, i) => ({
//             id: i + 1,
//             nome: e.nome
//         }))
//         return res.status(200).json(nomesEventos)
//     },

//     pegarEvento: (req, res) => {
//         const { posicao } = req.params
//         if (posicao >= eventos.length) {
//             return res.status(404).json({
//                 erro: "Evento não existe"
//             })
//         }
//         const { nome, descricao, data } = eventos[posicao - 1]
//         return res.status(200).json({
//             id: posicao,
//             nome,
//             descricao,
//             data,
//         })
//     }
// }

const eventoController = {}

eventoController.pegarTodosEventos = function(req, res) {
    const nomesEventos = eventos.map((e, i) => ({
        id: i + 1,
        nome: e.nome
    }))
    return res.status(200).json(nomesEventos)
}

eventoController.pegarEvento = function(req, res) {
    const { posicao } = req.params
    if (posicao >= eventos.length) {
        return res.status(404).json({
            erro: "Evento não existe"
        })
    }
    const { nome, descricao, data } = eventos[posicao - 1]
    return res.status(200).json({
        id: posicao,
        nome,
        descricao,
        data,
    })
}

eventoController.criaEvento = function(req, res) {
    const evento = req.body
    eventos.push(evento)
    return res.status(201).json({
        messagem: "evento criado"
    })
}

module.exports = eventoController