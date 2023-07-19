import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from './pages/home/Home';
import  Quiz from './pages/quiz/Quiz';
import PageNotFound from './pages/404/PageNotFound';
import Result from './pages/result/Result';

const App = () => {
  return (
  <BrowserRouter>

   <Header/>

    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/result' element={<Result />} />
      <Route path='*' element={<PageNotFound />} />

    </Routes>

   <Footer />

  </BrowserRouter>
  
  )
}


export default App;