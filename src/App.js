import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavbarExample from './Components/NavbarExample/NavbarExample';

function App() {
  return (
    <Router>
    <>
     <NavbarExample/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  </Router>
  );
}

export default App;
