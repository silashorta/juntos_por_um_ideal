import React, { useState } from 'react';
import logo from '../../../public/images/anr_logo.png';
import { Link as ScrollLink } from 'react-scroll';

import { FaBars } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";


function MenuResponsive() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header 
        id='inicio'
        className='h-20 flex flex-col items-center justify-between p-4 top-0 z-50 lg:hidden'>
            <div className='w-full flex justify-between items-center'>
                <img src={logo} alt="Logotipo da Associação Nacional de Reabilitação" className='h-14' />
                <nav className={`flex flex-wrap justify-center gap-4 text-sm text-dark-blue font-outfit`}>
                    <FaBars className="block lg:hidden cursor-pointer" onClick={toggleMenu} />
                </nav>
            </div>
            {menuOpen && (
                <div className='flex'>
                    <div className='p-4 flex flex-col items-center gap-4 h-full bg-white fixed top-0 left-0 right-0 font-outfit z-50 '>
                        <IoMdClose className='self-end text-xl' onClick={toggleMenu}/>
                        <ScrollLink
                            to="inicio"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer py-2 px-4 hover:bg-gray-200"
                            onClick={toggleMenu}
                        >
                            Início
                        </ScrollLink>
                        <ScrollLink
                            to="nossa-historia"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer py-2 px-4 hover:bg-gray-200"
                            onClick={toggleMenu}
                        >
                            Nossa História
                        </ScrollLink>
                        <ScrollLink
                            to="parceiros"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer py-2 px-4 hover:bg-gray-200"
                            onClick={toggleMenu}
                        >
                            Parceiros
                        </ScrollLink>
                        <ScrollLink
                            to="nossos-valores"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer py-2 px-4 hover:bg-gray-200"
                            onClick={toggleMenu}
                        >
                            Nossos Valores
                        </ScrollLink>
                        <ScrollLink
                            to="projetos"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer py-2 px-4 hover:bg-gray-200"
                            onClick={toggleMenu}
                        >
                            Projetos
                        </ScrollLink>
                        <ScrollLink
                            to="depoimentos"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer py-2 px-4 hover:bg-gray-200"
                            onClick={toggleMenu}
                        >
                            Depoimentos
                        </ScrollLink>
                    </div>
                </div>
            )}
        </header>
    );
}

export default MenuResponsive;
