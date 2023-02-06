import './App.css'
import ClickCounter from './components/ClickCounter'
import InputCounter from './components/InputCounter'
import ProductList from './components/ProductList';
import { useState } from 'react';

function App() {
  const [produtos] = useState(["produto 1", "produto 2"]);
  return (
    <div className="App">
      <InputCounter />
      <ClickCounter />
      <ProductList produtos={produtos}/>
    </div>
  )
}

export default App
