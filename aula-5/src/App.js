import './App.css';
import { useState } from 'react';
import UsuarioItem from './components/UsuarioItem';

function App() {
    const [usuarios, setUsuarios] = useState([
        { nome: 'Usuário 1', estado: false },
        { nome: 'Usuário 2', estado: false },
        { nome: 'Usuário 3', estado: false }
    ]);

    const handleClick = posicao => {
        const usuariosMapeados = usuarios.map(usuario => ({
            ...usuario,
            estado: false
        }));
        setUsuarios(usuariosMapeados);

        const usuariosAtualizados = usuariosMapeados.map((usuario, index) => {
            if (index === posicao) {
                return { ...usuario, estado: true };
            }
            return usuario;
        });
        setUsuarios(usuariosAtualizados);
    };

    function handeAddUser() {
        setUsuarios([
            ...usuarios,
            { nome: `Usuário ${usuarios.length + 1}`, estado: false }
        ]);
    }

    return (
        <div className="container">
            <button onClick={handeAddUser}>Adicionar Usuário</button>
            {usuarios.map((usuario, index) => (
                <UsuarioItem
                    onClickItem={posicao => handleClick(posicao)}
                    key={index}
                    nome={usuario.nome}
                    estado={usuario.estado}
                    indice={index}
                />
            ))}
        </div>
    );
}

export default App;