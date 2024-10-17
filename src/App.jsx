import './App.css'
import Grocery from './Pages/Grocery'

import Footer from "./Pages/Footer"
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
function App() {
  

  return (
    <>
    <Navbar/>
     <div className='bg-gray-900'>
      <Grocery/>
     </div>
     <Banner/>
     <Footer/>
    </>
  )
}

export default App
