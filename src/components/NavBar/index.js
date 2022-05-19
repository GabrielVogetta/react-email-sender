import {useState} from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [svgLinks, setSvgLinks] = useState({
        email: './email.svg',
        info: './info.svg'
    });

    const handleMouseOver = ({target}) => {
        const att = target.name;
        setSvgLinks({...svgLinks, [att]: `./${att}-blue.svg`});
    };

    const handleMouseOut = () => {
        setSvgLinks({email: './email.svg', info: './info.svg'});
    };

    return (
        <div className='navBar'>
            <Link to='/' className='navBar_link' name='email' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src={svgLinks.email} alt='Ícone email' onMouseOver={handleMouseOver} name='email'/>
                E-mail
            </Link>
            <Link to='/about' className='navBar_link' name='info' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src={svgLinks.info} alt='Ícone sobre' onMouseOver={handleMouseOver} name='info'/>
                Sobre
            </Link>
        </div>
    );
}

export default NavBar;
