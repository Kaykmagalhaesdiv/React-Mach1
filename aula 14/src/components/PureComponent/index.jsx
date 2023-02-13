import { memo, useRef, useState } from 'react';

function PureComponent() {
    const [name, setName] = useState('Maria');

    const refInput = useRef(null);

    function handleClick() {
        if (refInput.current.value !== name) {
            setName(refInput.current.value);
        }
    }

    console.log('render');

    return (
        <div>
            <h1>{name}</h1>
            <input ref={refInput} type="text" />
            <button onClick={handleClick}>Salvar</button>
        </div>
    );
}

export default memo(PureComponent);