import './index.scss';
import LateralMenu from '../components/menuComponente/index.js';
import Cabecalho from '../components/cabecalhoComponente/index.js';

import lupa from '../../assets/iconamoon_search-bold.png'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CarsControl() {

    const [veiculos, setVeiculos] = useState([])
    const [tipos, setTipos] = useState([]);

    const [tipoVeiculo, setTipoVeiculo] = useState(0)
    const [modeloVeiculo, setModeloVeiculo] = useState('')
    const [marcaVeiculo, setMarcaVeiculo] = useState('')
    const [anoVeiculo, setAnoVeiculo] = useState('')
    const [placaVeiculo, setPlacaVeiculo] = useState('')

    const [listarVeiculo, setListarVeiculo] = useState('')



    async function inserirCarro() {

        try {
            
            let veiculo = {
                tipoVeiculo: tipoVeiculo,
                modelo: modeloVeiculo,
                marca: marcaVeiculo,
                placa: placaVeiculo,
                ano: anoVeiculo
            }

            let r = await axios.post('http://localhost:5000/veiculo', veiculo)
            alert('veiculo cadastrado')


        } catch (err) {
            alert(err.response.data.erro)
        }

    }


    async function listarTipos() {
        let r = await axios.get('http://localhost:5000/tipo');
        setTipos(r.data);

    }

    async function listarVeiculos() {
        let r = await axios.get('http://localhost:5000/veiculos/nmp?busca=' + listarVeiculo)
        setVeiculos(...[r.data])

    }

    return (
        <div className='CarsMain'>
            <LateralMenu />
            <div className='CarContent'>
                <Cabecalho />
                <main>
                    <div className='Titulo'>
                        <h4>ÁREA ADMINISTRATIVA</h4>
                        <h1>Controle de Veiculos</h1>
                    </div>

                    <section className='NovoCarro'>
                        <h1> Novo Veículo </h1>
                        <span >
                            <label>Tipo</label>


                            <select id="veiculo" name="veiculo" onChange={(e) => setTipoVeiculo(e.target.value)} onClick={() => listarTipos()}>
                                <option value="1">Selecionar</option>
                                {tipos.map(item =>
                                    <option key={item.ID_TIPO_VEICULO} value={item.ID_TIPO_VEICULO}> {item.DS_TIPO} </option>
                                )}
                            </select>


                        </span>

                        <span >
                            <label>Modelo</label>
                            <input value={modeloVeiculo} onChange={e => setModeloVeiculo(e.target.value)} type='text' />
                        </span>

                        <span >
                            <label>Marca</label>
                            <input type='text' value={marcaVeiculo} onChange={e => setMarcaVeiculo(e.target.value)} />
                        </span>

                        <span >
                            <label>Ano</label>
                            <input value={anoVeiculo} onChange={e => setAnoVeiculo(e.target.value)} type='text' />
                        </span>

                        <span >
                            <label>Placa</label>
                            <input value={placaVeiculo} onChange={e => setPlacaVeiculo(e.target.value)} type='text' />
                        </span>

                        <span className='btnSpan'>
                            <button onClick={inserirCarro}> Salvar </button>
                        </span>

                    </section>

                    <section className='Carrolista'>
                        <h1>Lista de Veículos</h1>
                        <span >
                            <div className=''  >
                                <label>Modelo, Marca, Placa</label>
                                <input type='text' value={listarVeiculo} onChange={(e) => setListarVeiculo(e.target.value)} />
                            </div>
                            <div>
                                <img src={lupa} onClick={() => listarVeiculos()} />
                            </div>
                        </span>
                        <table>
                            <colgroup>
                                <col style={{ width: 30 + '%' }} />
                                <col style={{ width: 15 + '%' }} />
                                <col style={{ width: 12 + '%' }} />
                                <col style={{ width: 12 + '%' }} />
                                <col style={{ width: 20 + '%' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Modelo</th>
                                    <th>Marca</th>
                                    <th>Ano</th>
                                    <th>Tipo</th>
                                    <th>placa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {veiculos.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.modelo}</td>
                                        <td>{item.marca}</td>
                                        <td>{item.ano}</td>
                                        <td>{item.tipoVeiculo}</td>
                                        <td>{item.placa}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </section>

                </main>

            </div>
        </div>
    );
}