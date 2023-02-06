import { Routes, Route } from 'react-router-dom';
import MyComponent from './MyComponent/MyComponent';
import Home from './pages/Home';
import Post from './pages/Post';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<MyComponent />} />
            <Route path="/posts/:id" element={<Post />} />
        </Routes>
    );
}

export default Router;