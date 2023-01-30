import './App.css';
import UsuarioItem from './components/UsuarioItem/UsuarioItem';

function App() {
  const usuarios = ['Usuario 1', 'Usuario 2', 'Usuario 3']
  return (
    <div className="App">
      <UsuarioItem name={usuarios} />
    </div>
  );
}

export default App;