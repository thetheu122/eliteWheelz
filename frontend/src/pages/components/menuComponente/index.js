import './index.scss'
import logo from '../../../assets/logo.png'

import Clientes from '../../../assets/Vector-1.png'
import casinha from '../../../assets/Vector.png'
import Chave from  '../../../assets/Vector-2.png'
import Carrinho from  '../../../assets/Group.png'

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LateralMenu() {
      
    // falta colocar as fotinhas no lado


    return (
        <div className='MainMenu'>
            <div className='content'>

                <div className='imgEx'>
                    <img src= {logo}/>
                    <h3>Elite<span>Wheels</span></h3>
                </div>

                    <div className='options' >
                <Link to='/'>
                        <div id='selected' >
                        <img src={casinha} />
                            <a>Home</a>
                        </div>
                </Link>

                <Link to='/clientsControl'>
                    <div id='selected'>
                        <img src={Clientes} />
                        <a>Clientes</a>
                    </div>
                </Link>
                <Link to='/carcontrol'>
                <div id='selected'>
                    <img src={Chave} />
                    <a>Veiculos</a>
                </div>
                </Link>
                <Link to='/location'>

                <div id='selected'>
                    <img src={Carrinho} />
                    <a>Locação</a>
                </div>
                </Link>

            </div>
        </div>  
        </div >)
}