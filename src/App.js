import './App.css';
import Home from './components/home';
import Movies from './components/movies';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Celebs from './components/celebs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './components/404';
import AddFavourites from './components/AddFavourites';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>          {/* home page only add '?/' */}
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/celebs' element={<Celebs/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/add-favourites' element={<AddFavourites/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;