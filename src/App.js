import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.scss';
import './reset.css';
import Login from './Pages/Login';
import Cadastro from './Pages/cadastro';
import Paciente from './Pages/Paciente';
import Triagem from './Pages/Triagem';
import Confirmacao from './Pages/Confirmacao';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/paciente' element={<Paciente/>}/>
        <Route path='/triagem' element={<Triagem/>}/>
        <Route path='/confirmacao' element={<Confirmacao/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
