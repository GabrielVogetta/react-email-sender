import {useEffect} from 'react';
import './styles.css';

const Modal = ({children}) => {

    // useEffect(() => {
    //     const callback = () => {
    //         window.scrollTo(0,0);
    //     };

    //     window.addEventListener('scroll', callback);

    //     return () => {
    //         console.log('Modal fechado!');
    //         window.removeEventListener('click', callback);
    //     };
    // }, []);


    return (
        <div className='modal'>
            {children}
        </div>
    );
}

export default Modal;
