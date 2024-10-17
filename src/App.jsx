import './App.css'
import Footer from "./Pages/Footer"
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Grocery from './Pages/Grocery'
import LandingPage from './Pages/LandingPage'
import FashionPage from './Pages/FashionPage'
import MensPage from './Pages/MensPage'
import { Routes,Route } from 'react-router-dom'
import WomenPage from './Pages/WomensPages'
import KidsPages from './Pages/KidsPages'
import GroceryPages from './Pages/Grocery'


function App() {
  

  return (
    <>
    <Navbar bgColor="#E9E9E9" />
    <Routes>
      <Route path='/' element={<FashionPage/>}/>
      <Route path='/category/men' element={<MensPage/>}/>  
      <Route path='/category/women' element={<WomenPage/>}/>  
      <Route path='/category/baby-kids' element={<KidsPages/>}/>  
      <Route path='/grocery' element={<GroceryPages/>}/>  



        
    </Routes>
     <Footer bgColor="#D5006D" />
    </>
  )
}

export default App