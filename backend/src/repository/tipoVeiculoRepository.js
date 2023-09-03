import {con} from "./connection.js"


export async function buscarTipos() {

    const comando = 
    `
        SELECT  *
            FROM TB_TIPO_VEICULO 

    `

    const [resposta] = await con.query(comando);

    return resposta;

  }