import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Animes from './Pages/Animes';
import Avatares from './Pages/Avatares';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/Animes' element={<Animes />} />
      </Routes>
      <Routes>
        <Route path='/Avatares' element={<Avatares />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;