import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import ContactUs from './Components/ContactUs/ContactUs';   
import NavbarExample from './Components/NavbarExample/NavbarExample';

function App() {
  return (
    <Router>
      <>
        <NavbarExample />
        <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
