import React from 'react';
import './styles.css';

const EmailsList = ({emails}) => {
    return(
        <ul className='emailsList'>
            {emails.map((email, index) => {
                return(
                    <li className='email' key={index}>{email}</li>
                );
            })}
        </ul>
    );
};

const Inbox = ({emails}) => {
    return (
        <div className='inbox'>
            <h2>Inbox</h2>
            {
                emails ? <EmailsList emails={emails}/>
                : <h3>Não há nenhum email</h3>
            }
        </div>
    );
};

export default Inbox;
