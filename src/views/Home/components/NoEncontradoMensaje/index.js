import './style.css'
import Psyduck from '../../../../images/patoError.webp'
import close from '../../../../images/close-icon.webp'
const NoEncontradoMensaje = ({setNotFound}) => {
    return (
        <div className="container-msj-error">
            <img src={Psyduck} alt="Psyduck" className="psyduck" />
            <p>Lo sentimos, pero no ha sido encontrado tu pokemon, puedes verificar que el nombre sea el correcto he intentar nuevamente.</p>
            <img src={close} alt="icono cerrar" className="close-icon" onClick={() => setNotFound(undefined)}/>
        </div>
    )
}

export default NoEncontradoMensaje
