import React from 'react'
import logo from '../../../public/images/anr_logo.png'
import { Link as ScrollLink } from 'react-scroll';


function Menu() {
    return (
        <menu 
        id='inicio'
        className='h-20 flex items-center justify-between p-4 hidden lg:flex'>
            <img src={logo} alt="Logotipo da Associação Nacional de Reabilitação" className='h-14'/>
            <nav className='flex flex-wrap justify-center gap-4 text-sm text-dark-blue font-outfit'>
                    <ScrollLink
                        to="inicio"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer"
                    >
                        <a href="#inicio">Início</a>
                    </ScrollLink>
                    <ScrollLink
                        to="nossa-historia"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer"
                    >
                        <a href="#nossa-historia">Nossa Historia</a>
                    </ScrollLink>
                    <ScrollLink
                        to="parceiros"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer"
                    >
                        <a href="#parceiros">Parceiros</a>
                    </ScrollLink>
                    <ScrollLink
                        to="nossos-valores"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer"
                    >
                        <a href="#nossos-valores">Nossos Valores</a>
                    </ScrollLink>
                    <ScrollLink
                        to="projetos"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer"
                    >
                        <a href="#projetos">Projetos</a>
                    </ScrollLink>
                    <ScrollLink
                        to="depoimentos"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer"
                    >
                        <a href="#depoimentos">Depoimentos</a>
                    </ScrollLink>
                </nav>
        </menu>
    )
}

export default Menu
