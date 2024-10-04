
import './App.scss'
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import Input from './components/Input';
import Button from './components/Button';
import Navbar from './features/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
function App() {
  const user = useSelector((state: RootState) => state.user)

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='cadastro' element={<Cadastro/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
