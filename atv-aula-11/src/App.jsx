import './App.css';
import ProductList from './components/ProductList';
import { produtoContext } from './context';
import { useContext } from 'react';

function App() {

  const {dispatch} = useContext(produtoContext)
  
  function remove(){
    dispatch({type:'REMOVE_PRODUCT'})
  }
  function add(){
    dispatch({type:'PRODUCT_ADD', payload: 'produtoNovo'})

  }
  return (
    <div>
      <button onClick={remove}>Deletar</button>
      <button onClick={add}>ADD</button>
      <ProductList/>
    </div>
  )
}

export default App