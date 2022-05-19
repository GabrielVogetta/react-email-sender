import {useState} from 'react';
import './styles.css';

const Button = ({mouseOver, mouseOut, styles, label, handleClick}) => {
    
    const [icon, setIcon] = useState(mouseOut);

    const handleMouseOver = () => {
        setIcon(mouseOver);
    };

    const handleMouseOut = () => {
        setIcon(mouseOut);
    };
    
    return (
        <button
            onClick={handleClick}
            className={`button ${styles}`}
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
        >
            {icon && <img src={icon} alt='Ícone do botão'/>}
            {label}
        </button>
    );
}

export default Button;
