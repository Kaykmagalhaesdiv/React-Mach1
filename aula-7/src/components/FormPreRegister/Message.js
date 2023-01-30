function Message(props) {
  return (
      <>
          {props.exibir && (
              <span className="mensagem">
                  {props.campo}{' '}
                  {props.campo == 'Senha' ? 'inválida' : 'inválido'}
              </span>
          )}
      </>
  );
}
export default Message;