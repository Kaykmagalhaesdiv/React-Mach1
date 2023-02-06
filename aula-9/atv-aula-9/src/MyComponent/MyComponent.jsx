import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function MyComponent() {
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('https://jsonplaceholder.typicode.com/posts')
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
                <Link to="/">Home</Link>
            </div>

            {loading && <strong>Carregando dados...</strong>}

            {dados.map(post => (
                <div key={post.id} className="container-post">
                    <Link to={`/posts/${post.id}`}>
                        <div>
                            <strong>id: </strong>
                            <span>{post.id}</span>
                        </div>
                        <div>
                            <strong>{post.title}</strong>
                            <p>{post.body}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}