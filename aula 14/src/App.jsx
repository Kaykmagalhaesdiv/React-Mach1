import Exemplo from './components/Exemplo1';
import Exemplo2 from './components/Exemplo2';
import PureComponent from './components/PureComponent';
import Statefull from './components/Statefull';
import Stateless from './components/Stateless';

function App() {
    return (
        <div>
            <Stateless title="Stateless" />
            <Statefull />
            <PureComponent />
            <Exemplo />
            <Exemplo2 />
        </div>
    );
}

export default App;