
import { Router } from "express";
import { buscarTipos } from "../repository/tipoVeiculoRepository.js";


const endpoints = Router()


endpoints.get('/tipo', async (req, resp) => {

    try {

        const resposta = await buscarTipos()

        resp.send(resposta)
        
    } catch (err) {
        resp.status(500).send({
            erro: err.message
        })
    }
})



export default endpoints