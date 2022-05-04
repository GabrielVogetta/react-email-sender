import {useState} from 'react';
import './styles.css';
import {useToast} from '../../contexts/Toast';
import TextField from '../TextField';
import useForm from '../../hooks/useForm';
import sendEmail from '../../api/sendEmail';
import Loader from '../Loader';

const Form = () => {

    const [isLoading, setIsLoading] = useState(false);

    const {setToast} = useToast();

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
    };

    return(
        <form onSubmit={handleSendMail} autoComplete="off">

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
            error={form.errors.email}
            onChange={form.handleChange}
          />

          <TextField 
            name='subject' 
            label='Assunto' 
            type='input'
            onChange={form.handleChange}
          />

          <TextField
            name='text'
            label='Escreva o e-email' 
            type='textarea'
            onChange={form.handleChange}
          />

          <button type='submit'>
            {
              isLoading ?
              <Loader/>
              :
              'Enviar'
            }
          </button>
        </form>
    );
};

export default Form;