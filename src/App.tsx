import { Routes, Link, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Dream from './pages/Dream'
import Contact from './pages/Contact'
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/dream' element={<Dream/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
        
    </>
  )
}

export default App
