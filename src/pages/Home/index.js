import { useState, useEffect } from 'react';
import './styles.css';

import Button from '../../components/Button';
import Toast from "../../components/Toast";
import Form from "../../components/Form";

export default function Home(){

    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
          window.scrollTo(0,0);
        });
    }, []);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return(
        <div className='home'>

            <Toast/>

            <Button
                handleClick={toggleOpen}
                label='Escrever'
                styles='writeButton'
                mouseOut='./pencil.svg'
                mouseOver='./pencil-white.svg'
            />

            {open && <Form onClose={toggleOpen}/>}

        </div>
    );
}