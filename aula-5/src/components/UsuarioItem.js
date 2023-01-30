import './UsuarioItem.css';

function UsuarioItem({ nome, estado, onClickItem, indice }) {
    return (
        <>
            <p
                onClick={() => onClickItem(indice)}
                className={estado ? 'itemAtivo' : ''}
            >
                {nome}
            </p>
        </>
    );
}

export default UsuarioItem;