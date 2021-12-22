import {Link} from 'react-router-dom'
import search_icon from '../../images/searh-icon.webp'
import './style.css'

const HiddenButton = () => {
    return (
        <div>
            <div className='hidden-button'>
                <Link to="/">
                    <p>Ir a Página <br/>Principal</p>
                </Link>
                <Link to='/'>
                    <img className="search-icon" src={search_icon} alt="search"/>
                </Link>
            </div>     
        </div>
    )
}

export default HiddenButton;
