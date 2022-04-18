import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Nike from './pages/Nike';
import Berlutini from './pages/Bertulini';
import AllStar from './pages/AllStar';
import Adidas from './pages/Adidas';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/nike' element={<Nike />} />
      </Routes>
      <Routes>
        <Route path='/bertulini' element={<Berlutini />} />
      </Routes>
      <Routes>
        <Route path='/allstar' element={<AllStar />} />
      </Routes>
      <Routes>
        <Route path='/adidas' element={<Adidas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
