import React from 'react';
import { FaUsers, FaRegHandshake } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";

function NossosValores() {
    // Array de objetos contendo as informações de cada valor
    const valores = [
        {
            icon: <FaUsers style={{ fontSize: '40px' }} />,
            title: 'Compromisso com a Comunidade e Solidariedade',
            description: 'Estamos comprometidos com o fortalecimento da comunidade de motociclistas. Acreditamos que juntos somos mais fortes e que a solidariedade é fundamental para superar desafios e construir um futuro melhor. Estendemos a mão para ajudar nossos companheiros motociclistas em momentos de necessidade e trabalhamos em conjunto para promover um senso de unidade e apoio dentro da comunidade.'
        },
        {
            icon: <FaRegHandshake style={{ fontSize: '40px' }} />,
            title: 'Respeito e Apoio Mútuo',
            description: 'Respeito é a base de todas as nossas interações. Valorizamos a diversidade de experiências, perspectivas e opiniões dentro da comunidade de motociclistas e cultivamos um ambiente de respeito mútuo. Além disso, estamos sempre prontos para oferecer apoio uns aos outros, seja em termos emocionais, práticos ou de segurança, criando uma rede de apoio sólida e confiável.'
        },
        {
            icon: <IoMdHappy style={{ fontSize: '40px' }} />,
            title: 'Promover a Segurança e o Bem-Estar dos Motociclistas',
            description: 'A segurança e o bem-estar dos motociclistas são nossa prioridade máxima. Comprometemo-nos a promover práticas seguras de pilotagem, fornecer recursos educacionais sobre segurança no trânsito e criar uma cultura que valorize a proteção e o cuidado mútuo. Estamos empenhados em fazer tudo o que estiver ao nosso alcance para garantir que todos os motociclistas possam desfrutar de viagens seguras e gratificantes em suas jornadas.'
        }
    ];

    return (
        <section className='flex flex-col p-4 lg:p-16 gap-8'>
            <h2 className='font-bebas-neue text-4xl text-dark-blue'>Nossos Valores</h2>
            <div className='flex flex-col gap-6 text-center'>
                <h3 className='text-5xl text-gray-600'>O que valorizamos</h3>
                <p>Nossos valores são a base de tudo o que fazemos. Eles representam os princípios pelos quais vivemos e orientam todas as nossas ações e decisões:</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
                {/* Mapeando os valores e renderizando dinamicamente */}
                {valores.map((valor, index) => (
                    <div key={index} className='flex flex-col text-center gap-2'>
                        <hr className=''></hr>
                        <div className='h-full m-auto text-dark-blue'>{valor.icon}</div>
                        <h3 className='h-full font-archivo-black text-dark-blue'>{valor.title}</h3>
                        <p className='h-full font-varela-round'>{valor.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NossosValores;
