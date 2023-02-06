import { useState } from 'react';
import Produto from './assets/components/Produto';
import { useContext } from 'react';
import ProdutoContext from './context';
import './App.css';


function App() {
  const {produto, setProduto } = useContext(ProdutoContext);

  function atualiza(){
    setProduto({...produto, name: 'Água', preco:'R$7,00'})
  }
  return (
    <>
      <button onClick={atualiza} >Altera</button>
      <Produto/>
    </>
  )
}

export default App