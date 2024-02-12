import './App.css'
import Footer from './Component/Footer'
import Hero from './Component/Hero'
import Highlights from './Component/Highlights'
import Menu from './Component/Menu'
import NossaHistoria from './Component/NossaHistoria'
import NossosValores from './Component/NossosValores'
import Parceiros from './Component/Parceiros'
import Projetos from './Component/Projetos'

function App() {

  return (
    <div>
      <header>
        <Menu />
      </header>
      <main>
        <Hero />
        <NossaHistoria />
        <Highlights />
        <Parceiros />
        <NossosValores />
        <Projetos />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
