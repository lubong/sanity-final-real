import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./components/Home"
import About from "./components/About"
import Career from "./components/Career"
import InvestorInfo from "./components/InvestorInfo"
import Locations from "./components/Locations"
import News from './components/News';
import Promotions from "./components/Promotions"
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>   
        <Route element={<Home/>} path='/'></Route>
        <Route element={<About/>} path='/About'></Route>
        <Route element={<Career/>} path='/Career'></Route>
        <Route element={<InvestorInfo/>} path='/InvestorInfo'></Route>
        <Route element={<Locations/>} path='/Locations'></Route>
        <Route element={<News/>} path='/News'></Route>
        <Route element={<Promotions/>} path='/Promotions'></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
