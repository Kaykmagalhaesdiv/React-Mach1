import useCounter from "../hooks/useCounter"

function Contador() {
    const {count, increment, decrement} = useCounter()
    return(
        <div>
            <button onClick={() => increment()}>Incrementa</button>
            <span>{count}</span>
            <button onClick={() => decrement()}>Decrementa</button>
        </div>
    )
}

export default Contador