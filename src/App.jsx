import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Depoimentos from './Component/Depoimentos'
import Footer from './Component/Footer'
import Hero from './Component/Hero'
import Highlights from './Component/Highlights'
import Menu from './Component/Menu'
import NossaHistoria from './Component/NossaHistoria'
import NossosValores from './Component/NossosValores'
import Parceiros from './Component/Parceiros'
import Projetos from './Component/Projetos'
import { animateScroll as scroll } from 'react-scroll';

function App() {
  const scrollTo = (id) => {
    scroll.scrollTo(`#${id}`, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div>
      <header>
        <Menu />
      </header>
      <main>
        <Hero id="inicio"/>
        {<NossaHistoria id="nossa-historia"/>}
        {/* <Highlights /> */}
        <Parceiros id="parceiros"/>
        <NossosValores id="nossos-valores"/>
        <Projetos id="projetos"/>
        <Depoimentos id="depoimentos"/>
      </main>
      <footer>
      <Footer scrollTo={scrollTo} />
      </footer>
    </div>
  )
}

export default App
