import './style.css';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { useState } from 'react';
import Message from './Message';
import { useEffect } from 'react';

// verifica se email é válido, retornando true / false
function emailValido(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// verifica se senha é valida, retornando true / false
function senhaValida(senha) {
    return senha.length >= 6;
}

export default function FormPreRegister() {
    const [tipoInput, setTipoInput] = useState('password');
    const [formValido, setFormValido] = useState(false);
    const [formData, setFormData] = useState({
        email: {
            valor: '',
            invalido: false,
            showMessage: false
        },
        senha: {
            valor: '',
            invalido: false,
            showMessage: false
        },
        termos: {
            valor: '',
            invalido: true,
            showMessage: false
        },
        categoria: {
            valor: '',
            invalido: true,
            showMessage: false
        }
    });

    // Função para mudar o tipo de input baseado no estado do tipoInput. O 'state' é o mesmo que o tipoInput
    // Chamar essa função ao clicar no ícone e no input passar o tipo como tipoInput.
    function handleChangeInputType() {
        setTipoInput(state => (state === 'password' ? 'text' : 'password'));
    }

    // Função que atribui o tipo invalido a depender do preenchimento dos campos e atualiza o formData
    function salvarValorCampo(e) {
        const { name, value, checked } = e.target;

        let invalido = false;
        let showMessage = false;

        if (name === 'email') {
            invalido = !emailValido(value);
            showMessage = !emailValido(value);
        } else if (name === 'senha') {
            invalido = !senhaValida(value);
            showMessage = !senhaValida(value);
        } else if (name === 'termos') {
            invalido = !checked;
        } else if (name === 'categoria') {
            invalido = !value;
        }

        setFormData({
            ...formData,
            [name]: {
                valor: value,
                invalido: invalido,
                showMessage: showMessage
            }
        });
    }

    // Função usada apenas no Focus, ao focar no campo remove a Mensagem pois seta o showMessage como false.
    function removerMensagem(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: {
                valor: value,
                invalido: formData[name].invalido,
                showMessage: false
            }
        });
    }

    // Verificação do formulario, monitora todas condições para que o formulário esteja valido ou nao, e usamos este estado para habilitar ou não o botão de submit.
    useEffect(() => {
        if (
            formData.email.invalido ||
            formData.senha.invalido ||
            formData.termos.invalido ||
            formData.categoria.invalido ||
            formData.email.valor === '' ||
            formData.senha.valor === ''
        ) {
            setFormValido(false);
        } else {
            setFormValido(true);
        }
    }, [formData]);

    return (
        <div className="container">
            <h2 className="title">CADASTRO</h2>
            <form action="">
                <div className="container-category">
                    <span>Categoria</span>
                    <div
                        className="fields-category"
                        onChange={salvarValorCampo}
                    >
                        <div>
                            <input
                                type="radio"
                                name="categoria"
                                id="aluno"
                                value="aluno"
                            />
                            <label htmlFor="aluno">aluno</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="categoria"
                                id="professor"
                                value="professor"
                            />
                            <label htmlFor="professor">professor</label>
                        </div>
                    </div>
                </div>
                <div className="container-email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email.valor}
                        onChange={salvarValorCampo}
                        onFocus={removerMensagem}
                        onBlur={e => {
                            e.target.value !== '' && salvarValorCampo(e);
                        }}
                        placeholder="adicione seu email"
                        data-invalid={
                            formData.email.showMessage ? 'true' : 'false'
                        }
                    />
                    <Message
                        exibir={
                            formData.email.invalido &&
                            formData.email.showMessage
                        }
                        campo="Email"
                    />
                </div>
                <div className="container-senha">
                    <label htmlFor="senha">Senha</label>
                    <div>
                        <input
                            type={tipoInput}
                            name="senha"
                            id="senha"
                            value={formData.senha.valor}
                            onChange={salvarValorCampo}
                            onFocus={removerMensagem}
                            onBlur={e => {
                                e.target.value !== '' && salvarValorCampo(e);
                            }}
                            data-invalid={
                                formData.senha.showMessage ? 'true' : 'false'
                            }
                            placeholder="digite sua senha"
                        />
                        {tipoInput === 'password' ? (
                            <IoIosEyeOff onClick={handleChangeInputType} />
                        ) : (
                            <IoIosEye onClick={handleChangeInputType} />
                        )}
                        <Message
                            exibir={
                                formData.senha.invalido &&
                                formData.senha.showMessage
                            }
                            campo="Senha"
                        />
                    </div>
                </div>
                <div className="container-sexo">
                    <label htmlFor="sexo">Sexo</label>
                    <select name="sexo" id="sexo">
                        <option defaultValue="masculino">Masculino</option>
                        <option defaultValue="feminino">Feminino</option>
                    </select>
                </div>
                <div className="container-termos">
                    <input
                        type="checkbox"
                        name="termos"
                        id="termos"
                        value={true}
                        onChange={salvarValorCampo}
                    />
                    <label htmlFor="termos">aceito os termos de uso</label>
                </div>
                <div className="container-button">
                    <button type="submit" disabled={!formValido}>
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    );
}