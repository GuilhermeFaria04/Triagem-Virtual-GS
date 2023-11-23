import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.scss';
import Login from './Pages/Login';
import Cadastro from './Pages/cadastro';
import Paciente from './Pages/Paciente';
import Triagem from './Pages/Triagem';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/paciente' element={<Paciente/>}/>
        <Route path='/triagem' element={<Triagem/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
