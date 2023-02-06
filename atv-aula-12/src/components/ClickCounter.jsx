import { useCallback, useState } from "react"

function ClickCounter() {

    const [count, setCount] = useState(0);

    const atualizaEstado = useCallback(() =>{
        setCount(count + 1)
    }, [count])
    return (
        <div>
            <button onClick={atualizaEstado}>Contador</button> <span>{count}</span>
        </div>
    )
}

export default ClickCounter