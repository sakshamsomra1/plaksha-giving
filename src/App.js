import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer/footer';
import Areatogive from './Areastogive/areastogive';
import Home from './Home/Home';
import Howtogive from './Howtogive/howtogive.jsx'

import About from './About/About.jsx'
import ContactPage from './Contact/contact.jsx'
import Donars from './Ourdonars/donars.jsx';

function App() {
  return (
    <Router>
      <>
      
        <Routes>
        
          <Route path="/" exact element={ <Home/>} />
          
        </Routes>
        <Routes>
          <Route path="/areas-to-give.html" element={<Areatogive/>}/>
        </Routes>
        <Routes>
          <Route path="/how-to-give.html" element={<Howtogive/>}/>
        </Routes>
      
        <Routes>
          <Route path="/faqs.html" element={<About/>}/>
        </Routes>
        <Routes>
          <Route path="/contact.html" element={<ContactPage/>}/>
        </Routes>
        <Routes>
          <Route path="/our-donors.html" element={<Donars/>}/>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
