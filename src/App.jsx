import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Menu from './components/menu/Menu'
import Banner from './components/banner/Banner'
import Banner2 from './components/banner/Banner2'
import Banner3 from './components/banner/Banner3'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
     <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Menu/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Footer/>
     </main>
    </>
  )
}

export default App
