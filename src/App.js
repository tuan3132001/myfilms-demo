import Intro from './components/Intro/Intro'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contents from './components/Contents/Contents'
import Menus from './components/Menus/Menus';
import MoviesDetail from './components/MoviesDetail/MoviesDetail';
import { useSelector } from 'react-redux';
import SearchMovies from './components/SearchMovies/SearchMovies';
import Home from './components/Pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './components/Pages/Search';

function App() {
  const { MovieDetail } = useSelector(state => state.infoMovies)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>

      {/* <SearchMovies /> */}
      {/* <Intro />
      <Contents />
      <Menus />
      <MoviesDetail movie={MovieDetail} showModal={MovieDetail ? true : false} /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
