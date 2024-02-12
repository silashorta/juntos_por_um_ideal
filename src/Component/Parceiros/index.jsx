import React from 'react';

const parceiros = [{
  imagem: ['alcateia.jpg', 'aliados_jiu_jitsu.jpg', 'amo_sp.jpg', 'correntes_de_aco.jpg', 'cristina_titania.jpg', 'ecleticas.jpg', 'femc.jpg', 'gambas_da_urca.jpg', 'golfinhos.jpg', 'harry_potter.jpg', 'lon_brasil.jpg', 'mam_brasil.jpg', 'os_gavioes.jpg', 'pirados.jpg', 'steel_goose.jpg', 'tavula.jpg', 'veneno_na_lata.jpg'],
  descricao: ['Equipe Alcateia RJ', 'Aliados Jiu Jitsu', 'Associação dos Moto Clubes do Estado de São Paulo', 'Correntes de Aço Triciclitas - Irajá - RJ', 'Cristina Titânia Locutora', 'Ecléticas Moto Clube RJ', 'FEMC - Federação Maranhense de Moto Clube', 'Gambás da Urca - MG', 'Golfinhos Irajá - RJ', 'Harry Potter Moto Clube - RJ', 'LON Brasil', 'Ministério Adventista de Motociclistas Brasil', 'Os Gaviões Paraíba do Sul e Três Rios - RJ', 'Pirados RJ', 'Steel Goose Moto Clube - RJ', 'Távula Redonda -RJ', 'Veneno na Lata - RJ']
}];

function Parceiros() {
  return (
    <section className='p-4 lg:p-16 flex flex-col gap-8 bg-dark-blue text-white'>
      <h2 className='font-bebas-neue text-4xl'>Parceiros</h2>
      <p>Conheça os nossos parceiros:</p>
      {parceiros.map((parceiro, index) => (
        <div key={index} className='flex flex-wrap gap-4 justify-around'>
          {parceiro.imagem.map((imagem, i) => (
            <div key={i} className='flex flex-col items-center gap-4 shadow-lg  shadow-slate-500'>
              <div className='bg-gray-100 p-4 rounded w-52 flex flex-col justify-center items-center gap-4 h-full'>
                <img src={`../../../public/images/parceiros/${imagem}`} alt={`Foto ${parceiro.descricao[i]}`} className='max-h-40 rounded' />
                <small className='max-w-40 text-center text-dark-blue text-base font-outfit'>{parceiro.descricao[i]}</small>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Parceiros;
