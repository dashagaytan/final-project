import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ArtGallery from './pages/ArtGallery'
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
          <Route path='/artGallery' element={<ArtGallery/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
        
    </>
  )
}

export default App
