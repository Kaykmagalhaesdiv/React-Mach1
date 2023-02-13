import { useState } from 'react';

export default function Exemplo() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}