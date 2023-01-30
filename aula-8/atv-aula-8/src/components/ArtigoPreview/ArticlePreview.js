import { Link } from 'react-router-dom';
import './style.css';

export default function ArtigoPreview({ artigo }) {
    const { nome, imagem, conteudo, tipo } = artigo;

    return (
        <div className="container">
            <div className="image">
                <img src={imagem} alt="" />
            </div>
            <div className="content">
                <span>{tipo}</span>
                <h2>{nome}</h2>
                <p>{conteudo}</p>
            </div>
            <Link to={`/Artigos/${nome}`}>Saiba mais...</Link>
        </div>
    );
}