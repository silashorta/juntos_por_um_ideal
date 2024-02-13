import React from 'react'

function NossosValores() {
    return (
        <section className='flex flex-col p-4 lg:p-16 gap-20'>
            <h2 className='font-bebas-neue text-4xl text-dark-blue'>Nosso Valores</h2>
            <div className='flex flex-col gap-6 text-center'>
                <h3 className='text-5xl text-gray-600'>O que valorizamos</h3>
                <p>Nossos valores são a base de tudo o que fazemos. Eles representam os princípios pelos quais vivemos e orientam todas as nossas ações e decisões:</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
                <div className='flex flex-col text-center gap-2'>
                    <hr></hr>
                    <h3 className='font-archivo-black text-dark-blue'>Valor Um: Compromisso com a Comunidade e Solidariedade</h3>
                    <p className='font-varela-round'>Estamos comprometidos com o fortalecimento da comunidade de motociclistas. Acreditamos que juntos somos mais fortes e que a solidariedade é fundamental para superar desafios e construir um futuro melhor. Estendemos a mão para ajudar nossos companheiros motociclistas em momentos de necessidade e trabalhamos em conjunto para promover um senso de unidade e apoio dentro da comunidade.</p>
                </div>
                <div className='flex flex-col text-center gap-2'>
                    <hr></hr>
                    <h3 className='font-archivo-black text-dark-blue'>Valor Dois: Respeito e Apoio Mútuo</h3>
                    <p className='font-varela-round'>Respeito é a base de todas as nossas interações. Valorizamos a diversidade de experiências, perspectivas e opiniões dentro da comunidade de motociclistas e cultivamos um ambiente de respeito mútuo. Além disso, estamos sempre prontos para oferecer apoio uns aos outros, seja em termos emocionais, práticos ou de segurança, criando uma rede de apoio sólida e confiável.</p>
                </div>
                <div className='flex flex-col text-center gap-2'>
                    <hr></hr>
                    <h3 className='font-archivo-black text-dark-blue'>Valor Três: Promover a Segurança e o Bem-Estar dos Motociclistas</h3>
                    <p className='font-varela-round'>A segurança e o bem-estar dos motociclistas são nossa prioridade máxima. Comprometemo-nos a promover práticas seguras de pilotagem, fornecer recursos educacionais sobre segurança no trânsito e criar uma cultura que valorize a proteção e o cuidado mútuo. Estamos empenhados em fazer tudo o que estiver ao nosso alcance para garantir que todos os motociclistas possam desfrutar de viagens seguras e gratificantes em suas jornadas.</p>
                </div>
            </div>
        </section>
    )
}

export default NossosValores
