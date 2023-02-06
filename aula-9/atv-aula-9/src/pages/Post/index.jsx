import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Post() {
    const { id } = useParams();
    const [dados, setDados] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Api Error');
                }
                return response.json();
            })
            .then(posts => {
                setTimeout(() => {
                    setDados(posts);
                    setLoading(false);
                }, 2000);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div className="navbar">
                <Link to="/posts">Voltar</Link>
            </div>
            {loading ? (
                <strong>Carregando dados...</strong>
            ) : (
                <div className="container-post">
                    <div>
                        <strong>id: </strong>
                        <span>{dados.id}</span>
                    </div>
                    <div>
                        <strong>{dados.title}</strong>
                        <p>{dados.body}</p>
                    </div>
                </div>
            )}
        </div>
    );
}