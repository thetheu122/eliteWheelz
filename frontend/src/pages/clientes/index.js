import { useEffect, useRef, useState } from 'react';
import Cabecalho from '../components/cabecalhoComponente/index.js';
import LateralMenu from '../components/menuComponente/index.js';

import lupa from '../../assets/iconamoon_search-bold.png'
import './index.scss';
import axios from 'axios';

export default function ClientsControl() {
  
  const[nomeCliente, setnomeCliente] = useState('')
  const[emailCliente, setemailCliente] = useState('')
  const[telefoneCliente, setTelefoneCliente] = useState('')
  const[CPFCliente, setCPFCliente] = useState('')
  const[CnhCliente, setCnhCliente] = useState('')
  const[tiposClientes, setTiposClientes] = useState([])
  
  const[cliente, setCliente] = useState('')
  const[erro, SetErro] = useState('')


  async function AddCliente(){
    try {
      let cliente = {
        nome: nomeCliente,
        email: emailCliente,
        telefone: telefoneCliente,
        cpf: CPFCliente,
        cnh: CnhCliente
      }

      let url = 'http://localhost:5000/cliente'
      let resposta = await axios.post(url, cliente)
      alert("Cadastrou")
      setnomeCliente('')
      setemailCliente('')
      setCPFCliente('')
      setCnhCliente('')
      setTelefoneCliente('')
    } catch (err) {
      SetErro(err.response.data.erro)
    }
  }

  async function listarCliente(){
    try {
      
      let url = 'http://localhost:5000/cliente/' + cliente
      let resposta = await axios.get(url)
      setTiposClientes(resposta.data)
      setCliente('')
    } catch (err) {
      SetErro(err.response.data.erro)
    }
  }

  return (
    <div className="MainApp">
      <LateralMenu />
      <div className='inputs_Tables'>
        <Cabecalho/>
        <div className='content'>
          <div className='Titulo'>
            <h4>ÁREA ADMINISTRATIVA</h4>
            <h1>Controle de Clientes</h1>
          </div>

          <section className='NovoCliente'>
            <h1> Novo Cliente </h1>
            <h3>{erro}</h3>
            <span >
              <label>Nome</label>
              <input type='text' value={nomeCliente}  onChange={e => setnomeCliente(e.target.value)}/>
            </span>

            <span >
              <label>Email</label>
              <input type='text' value={emailCliente}  onChange={e => setemailCliente(e.target.value)}/>
            </span>

            <span>
              <label>Telefone</label>
              <input type='text' value={telefoneCliente}  onChange={e => setTelefoneCliente(e.target.value)}/>
            </span>

            <span>
              <label>CPF</label>
              <input type='text' value={CPFCliente}  onChange={e => setCPFCliente(e.target.value)}/>
            </span>

            <span>
              <label>CNH</label>
              <input type='text' value={CnhCliente}  onChange={e => setCnhCliente(e.target.value)}/>
            </span>

            <span className='btnSpan'>
              <button onClick={AddCliente} > Salvar </button>
            </span>

          </section>

          <section className='ClientsLista'>
            <h1>Lista de Clientes</h1>
            <span>
              <div>
                <label>Nome</label>
                <input type='text' value={cliente} onChange={(e) => setCliente(e.target.value)}/>
              </div>
              
              <div>
                  <img onClick={listarCliente} src={lupa}/>
              </div>
            </span>
            <table>
              <colgroup>
                <col style={{ width: 30 + '%' }} />
                <col style={{ width: 20 + '%' }} />
                <col style={{ width: 15 + '%' }} />
                <col style={{ width: 25 + '%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Telefone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {tiposClientes.map((item) => (
                  <tr>
                    <td>{item.NM_NOME}</td>
                    <td>{item.DS_CPF}</td>
                    <td>{item.DS_TELEFONE}</td>
                    <td>{item.DS_EMAIL}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </section>

        </div>
      </div>
    </div >
  );
}
