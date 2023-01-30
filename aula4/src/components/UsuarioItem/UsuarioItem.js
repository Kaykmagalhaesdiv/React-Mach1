import './UsuarioItem.css'
function UsuarioItem(props) {
    return(
        <div className="Usuarios">
            {
                props.name.map((usuarios) => {
                  return <h3>{usuarios}</h3>  
                })
            }
        </div>
    )
}

export default UsuarioItem