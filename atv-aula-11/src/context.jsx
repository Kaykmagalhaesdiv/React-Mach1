import { createContext, useReducer } from "react";
import { initialStateProdutos, ProductReducer } from "./reducer";


export const produtoContext = createContext(initialStateProdutos);

export function ProdutoProvider({children}){
    const [state, dispatch] = useReducer(ProductReducer, initialStateProdutos)

    return (
    <produtoContext.Provider value={{state, dispatch}}>
        {children}
    </produtoContext.Provider>
    )
}