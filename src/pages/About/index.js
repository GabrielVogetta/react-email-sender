import './styles.css';

export default function About(){
    return(
        <main className='about'>
            <h1>Sobre o projeto</h1>
            <p>Olá, eu sou o Gabriel Vogetta, desenvolvedor desse projeto incrível</p>
            <p>React Email Sender é um pequeno projeto para enviar emails para quem você quiser através do email react.email.sender@gmail.com</p>
            <p>A aplicação front-end, construida em ReactJs, se comunica com o back end em NodeJs, responsável por enviar o email utilizando a biblioteca nodemailer</p>
            <p>
                Tecnologias do front-end
                React
                React Router
                Deploy - Vercel

                Tecnologias do back end
                NodeJs
                Nodemailer
                Express
                Deploy - Heroku
            </p>
    
            <h2>Repositórios do projeto</h2>
            <ul>
                <li>Front-end</li>
                <li>Back-end</li>
            </ul>

            <p>
                Meu primeiro projeto na qual foi construído o front e o back end
            </p>
            <p>
                Simples, porém importante para entender como funciona uma api, seja ao lado do cliente ou do servidor
            </p>
            <p>
                Aplicando conceitos de rotas, respostas de api, métodos http e etc
            </p>

            <p>
                Front conta com  
            </p>
                Espera de promises, mostrando componente loader enquanto o email não é enviado

            <ul>
                <li>
                    toasts para notificar se o email foi enviado com sucesso
                </li>
            </ul>
        </main>
    );
}