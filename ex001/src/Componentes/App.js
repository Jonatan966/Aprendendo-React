import React from 'react';
import logo from '../logo.svg';
import '../Estilos/App.css';
import CustomComponent from "./CustomComponent";
import Header from "./Header";
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header titulo="Pão de Batata"/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
