import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Animes from './Pages/Animes';
import Cadastro from './Pages/cadastro';

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
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;