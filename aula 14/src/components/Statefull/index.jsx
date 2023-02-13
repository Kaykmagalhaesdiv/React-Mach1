import { useState } from 'react';

export default function Statefull() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count => count + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Aumentar</button>
        </div>
    );
}