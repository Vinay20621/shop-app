import './App.css'
import Footer from "./Pages/Footer"
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Grocery from './Pages/Grocery'
import LandingPage from './Pages/LandingPage'
import FashionPage from './Pages/FashionPage'

function App() {
  

  return (
    <>
    <Navbar bgColor="#E9E9E9" />
     <div className='bg-[#F5F5F5]'>
        <FashionPage/>
     </div>
     <Footer bgColor="#D5006D" />
    </>
  )
}

export default App