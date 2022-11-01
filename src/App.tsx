import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './componentes/Formulario';

// Projeto final
// https://github.com/alura-cursos/sorteador-de-amigo-secreto/archive/refs/heads/aula-5.zip

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Formulario />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
