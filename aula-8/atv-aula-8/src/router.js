import { Route, Routes } from 'react-router-dom';
import Artigo from './components/pages/Artigo/Artigo';
import ArtigoDetalhe from './components/pages/ArtigoDetalhe/ArtigoDetalhe';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Artigo />} />
            <Route path="/artigos" element={<Artigo />} />
            <Route path="/artigos/:slug" element={<ArtigoDetalhe />} />
        </Routes>
    );
}