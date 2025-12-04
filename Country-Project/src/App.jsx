import React from 'react';
import Header from "./components/header/Header.jsx";
import Main from "./components/main/MainBody.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./pages/About.jsx";
import Form from "./pages/From.jsx";
import Country from "./pages/Country.jsx";
import CountryDetails from "./components/Country/CountryDetails.jsx";
import NotFound from './pages/NotFound.jsx';
import {Route, Routes} from 'react-router-dom'; //Routing 

// https://www.apicountries.com/countries  --> API to Fetch Data
// max-w-dvw overflow-x-hidden min-h-dvh --> Responsive Css Code for Mobile

const App = () => {
  return (
    <div className='bg-black text-white max-w-dvw overflow-x-hidden min-h-dvh min-w-dvh relative'>

      <Header/>
      <Routes> 
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/country' element={<Country/>}/>
        <Route path='/country/:id' element={<CountryDetails/>}/>
        <Route path='/contact' element={<Form/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
