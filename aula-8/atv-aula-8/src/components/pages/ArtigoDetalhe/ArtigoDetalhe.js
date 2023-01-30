import { useParams } from 'react-router-dom';

function ArtigoDetalhe() {
    const { slug } = useParams();
    const listaArtigos = [
        {
            nome: 'Colors in Css',
            imagem: 'https://i.stack.imgur.com/IbMwF.png',
            conteudo:
                'A propriedade color é utilizada para definir a cor do texto de um elemento HTML. Quando aplicada a um elemento, o texto dentro dele terá a cor definida.',
            tipo: 'Front-end'
        },
        {
            nome: 'Css Grid',
            imagem: 'https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/CSS-GRID-3.png',
            conteudo:
                'CSS Grid Layout introduz um sistema bi-dimensional de grid (literalmente "grades") para CSS. Grids podem ser usados para o design de layouts de grandes seções de uma webpage, assim como de pequenos elementos de interface.',
            tipo: 'Front-end'
        },
        {
            nome: 'Css Variables',
            imagem: 'https://res.cloudinary.com/practicaldev/image/fetch/s--gKvVfErM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/904ahjro7e3yezzl1m42.png',
            conteudo:
                'Variáveis CSS são uma novidade no mundo das folhas de estilo que nem todos estão sabendo usar. Neste artigo, veja um guia prático sobre variáveis CSS que mostra suas principais vantagens, exemplos, macetes, formas de uso e interações com outras tecnologias.',
            tipo: 'Front-end'
        }
    ];

    const artigoAtual = listaArtigos.find(artigo => artigo.nome == slug);

    return (
        <div className="container">
            <div className="image">
                <img src={artigoAtual.imagem} alt="" />
            </div>
            <div className="content">
                <span>{artigoAtual.tipo}</span>
                <h2>{artigoAtual.nome}</h2>
                <p>{artigoAtual.conteudo}</p>
            </div>
        </div>
    );
}

export default ArtigoDetalhe;