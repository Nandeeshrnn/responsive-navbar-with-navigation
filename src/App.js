
import Navbar from './components/Navabr'
import { Route, Routes } from 'react-router-dom';
import {About,Services,Home,Contact} from './components/Pages'

const App=()=>{
  return(
    <div><Navbar/>

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
    </div>
  )
}


export default App;

