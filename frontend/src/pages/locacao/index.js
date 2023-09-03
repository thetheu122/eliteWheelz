import { useRef } from 'react';
import Cabecalho from '../components/cabecalhoComponente/index.js';
import LateralMenu from '../components/menuComponente/index.js';

import lupa from '../../assets/iconamoon_search-bold.png'
import './index.scss';


export default function Location() {


    return (
        <div className="Main">
            <LateralMenu/>

            <div className='LocationInsert'>
                <Cabecalho/>

                <div className='content'>

                    <div className='Title'>
                        <h4>ÁREA ADMINISTRATIVA</h4>
                        <h1>Controle de Locação</h1>
                    </div>

                    <section className='newLocation'>
                        <h1> Novo Locação </h1>
                        <div className='locationArrowInputs'>

                            <span >
                                <label>Nome</label>
                                <input type='text' />
                            </span>
                            <div className='icons'>
                                <i class="icons-aqui"></i>
                                <i class="icons-aqui"></i>
                            </div>
                            <span >
                                <label>Cliente</label>
                                <select>
                                    <option value="carro">Bruno, 123.456.350-6</option>
                                    <option value="carro">Bruno, 123.456.350-6</option>
                                    <option value="carro">CarlinhosHorse, 123.456.350-6</option>
                                    <option value="carro">Bruno, 123.456.350-6</option>
                                </select>
                            </span>
                        </div>

                        <div>

                            <span>
                                <label>Telefone</label>
                                <input type='text' />
                            </span>
                            <div className='icons'>
                                <i class="icons-aqui"></i>
                                <i class="icons-aqui"></i>
                            </div>
                            <span>

                                <label>Veículo</label>
                                <select>
                                    <option value="carro">HB20, 2016, ABC-123</option>
                                    <option value="carro">HB20, 2016, ABC-123</option>
                                    <option value="carro">HB20, 2016, ABC-123</option>
                                    <option value="carro">HB20, 2016, ABC-123</option>
                                </select>
                            </span>

                        </div>
                        <div>

                            <div className='inputs2'>
                                <span>
                                    <label>Data da Locação</label>
                                    <input type='date' />
                                </span>
                                <span >
                                    <label>KM atual</label>
                                    <input type='text' />
                                </span>
                                <label>
                                <input type='checkbox' />
                                       <a>
                                        Seguro
                                        </a> 
                                </label>
                            </div>
                            <span className='textarea'>
                                    <label>Observações</label>
                                    <textarea/>
                                </span>
                        </div>

                        <span className='botaospan'>
                            <button> Salvar </button>
                        </span>

                    </section>

                    <section className='ClientsLista'>
                        <h1> Locações em Andamento </h1>
                        <div className='inputBusc'>
                            <div>
                                <label>Nome ou CPF</label>
                                <input type='text'  />
                            </div>
                            <div>
                                <img  src={lupa}/>
                            </div>
                        </div>
                        <table>
                            <colgroup>
                                <col style={{ width: 20 + '%' }} />
                                <col style={{ width: 15 + '%' }} />
                                <col style={{ width: 15 + '%' }} />
                                <col style={{ width: 25 + '%' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>CPF</th>
                                    <th>Veiculo</th>
                                    <th>Data de Locação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Carlinhos </td>
                                    <td>21365161456</td>
                                    <td>HB20 (ABC-123)</td>
                                    <td>25/08/2023</td>
                                    <td><button >CONCLUIR</button> </td>
                                    <td className='btns' style={{ display: 'flex', height: 20 }}><i class="fa-regular fa-pen-to-square"></i> <i class="fa-solid fa-delete-left"></i></td>
                                </tr>

                            </tbody>
                        </table>

                    </section>

                </div>
            </div>
        </div >
    );
}
