import {useState} from 'react';
import './styles.css';
import {useToast} from '../../contexts/Toast';
import TextField from '../TextField';
import useForm from '../../hooks/useForm';
import Loader from '../Loader';
import Modal from '../Modal';
import Button from '../Button';
import sendEmail from '../../api/sendEmail';
import useClickOutside from '../../hooks/useClickOutside';

const Form = ({onClose}) => {

    const [isLoading, setIsLoading] = useState(false);

    const {setToast} = useToast();

    const $form = useClickOutside(() => {
      onClose();
    });

    const form = useForm({
      initialValues: {
        to: '',
        subject: '',
        text: '',
      },
      validate: () => {
        const errors = {};
  
        if(!form.values.to.includes('@')){
          errors.email = 'O email é inválido!'
        }
        if(form.values.to === ''){
          errors.email = 'O email deve ser preenchido!'
        }
  
        return errors;
      },
    });

    const handleSendMail = async (e) => {

        e.preventDefault();

        form.validateValues();

        if(form.values.to === '' || !form.values.to.includes('@')){
          return;
        }

        // ---------- SEND EMAIL -------------- //

        setIsLoading(true);

        const res = await sendEmail({
          to: form.values.to,
          subject: form.values.subject,
          text: form.values.text,
        });
        
        setIsLoading(false);
 
        setToast({});

        setToast({
          open: true,
          error: res.error,
          message: res.message
        });

        onClose();
        setTimeout(() => {
          form.resetForm();
        }, 3000);

    };

    return(
      <Modal>
          <form onSubmit={handleSendMail} autoComplete="off" ref={$form}>

            <button type='button' className='closeButton' onClick={onClose}>
              <img src='./close.svg' alt='Fechar'/>
            </button>

            <TextField
              name='from' 
              label='De'
              type='input' 
              value='react.email.sender@gmail.com' 
              readOnly
            />

            <TextField
              name='to'
              label='Para' 
              type='input'
              value={form.values.to} 
              error={form.errors.email}
              onChange={form.handleChange}
            />

            <TextField 
              name='subject' 
              label='Assunto' 
              type='input'
              value={form.values.subject}
              onChange={form.handleChange}
              />

            <TextField
              name='text'
              label='Escreva o e-email' 
              type='textarea'
              value={form.values.text}
              onChange={form.handleChange}
            />

              <Button
                styles='submitButton'
                label={
                  isLoading ?
                  <Loader/>
                  :
                  'Enviar'
                }
              />
          </form>
      </Modal>
    );
};

export default Form;