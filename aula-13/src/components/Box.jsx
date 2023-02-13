import "./Box.css";
import useToggle from "../hooks/useToggle";

function Box() {
    const [alterna, toggle] = useToggle()
    return (
        <div className={alterna ? 'box red' : 'box blue'}>
            <button onClick={() => toggle()}>Muda</button>
        </div>
    )
}

export default Box