import ProdutoContext from '../../context';
import { useContext } from 'react';


export default function Produto(){
    const {produto} = useContext(ProdutoContext);
   
    return(
        <div>
            {produto.name}
            <br/>
            {produto.preco}
            <br/>
            {produto.descricao}
        </div>
    )
}