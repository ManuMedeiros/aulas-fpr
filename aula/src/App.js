import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Primeira from './pages/Primeira';
import Segunda from './pages/Segunda';
import Terceira from './pages/Terceira';
import Nav from './Components/Button';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/primeira' element={<Primeira />} />
      </Routes>
      <Routes>
        <Route path='/segunda' element={<Segunda />} />
      </Routes>
      <Routes>
        <Route path='/terceira' element={<Terceira />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
