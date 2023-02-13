import { useState } from 'react';

export default function Exemplo2() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
    };

    document.title = `Você clicou ${count} vezes`;

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => increment()}>Clique aqui</button>
        </div>
    );
}