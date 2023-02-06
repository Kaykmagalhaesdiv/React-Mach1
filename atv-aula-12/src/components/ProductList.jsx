import { useMemo } from "react"

function ProductList(props) {
    const produtosMemo = useMemo(() => props.produtos, [props.produtos])
    return (
        <div>
            <ul>
                {produtosMemo.map(produto => <li>{produto}</li>)}
            </ul>
        </div>
    )
}

export default ProductList