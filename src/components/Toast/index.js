import './styles.css';
import {useToast} from '../../contexts/Toast';

const Toast = () => {
    
    const {toast} = useToast();

    return(
        toast.open &&

        <div className='popup'>
            <div className={`popupContent ${toast.error ? 'popupError' : 'popupSuccess'}`}>
                <img className='popupIcon' src={toast.error ? './error.svg' : './success.svg'} alt='erro'/>
                <p className={toast.error ? 'textError' : 'textSuccess'}>{toast.message}</p>
            </div>
        </div>
    );
};

export default Toast;