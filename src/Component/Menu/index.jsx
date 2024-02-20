import React from 'react'
import logo from '../../../public/images/anr_logo.png'


function Menu() {
    return (
        <menu 
        id='inicio'
        className='h-20 flex items-center justify-between p-4'>
            <img src={logo} alt="Logotipo da Associação Nacional de Reabilitação" className='h-14'/>
            <nav>
                <ul className='flex gap-4 text-black'>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                </ul>
            </nav>
        </menu>
    )
}

export default Menu
