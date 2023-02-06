import { createContext, useState } from "react";

const ProdutoContext = createContext({});

export function ProdutoProvider({ children }) {
  const [produto, setProduto] = useState({
    name: 'Ar',
    preco: 0,
    descricao:'Sem descricao',
  });
  return (
    <ProdutoContext.Provider value={{ produto, setProduto }}>
      {children}
    </ProdutoContext.Provider>
  );
}

export default ProdutoContext;