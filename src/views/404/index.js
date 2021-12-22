import psyduck from "../../images/upss.webp"
import './style.css'
import HiddenButton from '../../components/Hidden-button'
const Route404 = () => {
    
    return (
        <div className='main'>
            <HiddenButton/>
            <div className='container-error'>
                <img className="psyduck-img" src={psyduck} alt="psyduck-img"/>
                <h2 className='error-message'>¡Lo Siento!, la Página que buscas no está disponible o no existe...</h2>
            </div>
        </div>
    )
}

export default Route404;
