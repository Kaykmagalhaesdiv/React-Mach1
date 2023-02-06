import { useContext, useReducer } from "react"
import { initialStateProdutos, ProductReducer } from '../reducer';  
import { produtoContext } from '../context';

export default function ProductList(){

    const {state} = useContext(produtoContext)

    return(
        <div>
            {state}
        </div>
    )
}