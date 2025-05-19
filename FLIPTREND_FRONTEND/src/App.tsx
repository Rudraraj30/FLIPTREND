import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Movies from './components/Movies'
import Books from './components/Books'
import MovieReview from './components/MovieReview'

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/books" element={<Books />} />
          <Route path="/movie/:id" element={<MovieReview />} />
        </Routes>
      {/* <Header/>
      <Home/> */}
    </BrowserRouter>
  )
}

export default App
