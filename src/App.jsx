import './App.css'
import Articles from './components/Articles'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Swiper from './components/Swiper'

function App() {

  return (
    <div className="w-full">
      <Header />
      <Hero/>
      <Articles/>
      <Swiper/>
      <Footer/>
    </div>
  )
}

export default App
