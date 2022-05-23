import './styles.css';
import links from '../../links.json';

export default function About(){
    return(
        <main className='about'>
            <h2 className='subTitle'>Sobre o projeto</h2>

            <p>Olá, eu sou o Gabriel Vogetta, desenvolvedor desse projeto incrível</p>
            
            <a href={links.github} className='link githubLink'>
                <div className='box profileCard'>
                    <img 
                        className='avatar' 
                        src={links.avatar}
                        alt='Avatar Github'
                    />
                    <div className='flex'>
                        <img         
                            className='githubIcon' 
                            width='20px'
                            src='https://github.com/github.png' 
                            alt='Ícone Github'
                        />
                        GabrielVogetta
                    </div>
                </div>
            </a>

            <p>React Email Sender é um pequeno projeto para enviar emails para quem você quiser através do email:</p>
            <div className='box flex'>
                <img src='./email.svg' alt='Ícone email'/> 
                <p>react.email.sender@gmail.com</p>
            </div>

            <p>
                A aplicação FrontEnd, construída em <a href={links.tech.reactjs} className='link'>ReactJs</a> se 
                comunica com o BackEnd em <a href={links.tech.nodejs} className='link'>NodeJs</a> responsável 
                por enviar o email utilizando a biblioteca <a href={links.tech.nodemailer} className='link'>nodemailer</a>
            </p>

            <h2 className='subTitle'>Tecnologias</h2>
            <div className='box'>
                <ul className='techList'>

                    <div className='flex listSubTitle'>
                        FrontEnd 
                        <img src='./client.svg' alt='Ícone cliente'/>
                    </div>

                    <li>
                        <a href={links.tech.reactrouter} className='link flex'>
                            <img 
                                width='20px' 
                                src={links.icons.reactjs}
                                alt='ícone ReactJs'    
                            />
                            ReactJs
                        </a>
                    </li>

                    <li>
                        <a href={links.tech.reactrouter} className='link flex'>
                            <img 
                                width='20px' 
                                src={links.icons.reactrouter}
                                alt='Ícone React Router'    
                            />
                            React Router
                        </a>
                    </li>

                    <li>
                        <a href={links.tech.vercel} className='link flex'>
                            <img 
                                width='20px' 
                                src={links.icons.vercel}
                                alt='Ícone Vercel'    
                            />
                            Deploy - 
                            Vercel
                        </a>
                    </li>

                    <div className='flex listSubTitle'>
                        Back End 
                        <img src='./server.svg' alt='Ícone servidor'/>
                    </div>

                    <li>
                        <a href={links.tech.reactrouter} className='link flex'>
                            <img 
                                width='20px' 
                                src={links.icons.nodejs}
                                alt='Ícone NodeJs'    
                            />
                            NodeJs
                        </a>
                    </li>

                    <li>
                        <a href={links.tech.reactrouter} className='link flex'>
                            <img 
                                width='20px' 
                                src={links.icons.nodemailer}
                                alt='Ícone Nodemailer'    
                            />
                            Nodemailer
                        </a>
                    </li>

                    <li>
                        <a href={links.tech.reactrouter} className='link flex'>
                            <img 
                                width='20px' 
                                src={links.icons.express}
                                alt='Ícone ExpressJs'    
                            />
                            ExpressJs
                        </a>
                    </li>

                    <li>
                        <a href={links.tech.reactrouter} className='link flex'>
                            <img
                                width='20px'
                                src={links.icons.heroku}
                                alt='Ícone Heroku'
                            />
                            Deploy - Heroku
                        </a>
                    </li>

                </ul>
            </div>
    
            <h2 className='subTitle flex'>
                Repositórios do projeto 
                <img src='./repo.svg' alt='Ícone repositório'/>
            </h2>
            <ul className='box reposList'>
                <li>
                    <a href={links.repos.frontend} className='link flex'>
                        <img src='./link.svg' alt='Ícone link'/>
                        Front-end
                    </a>
                </li>
                <li>
                    <a href={links.repos.backend} className='link flex'>
                        <img src='./link.svg' alt='Ícone link'/>
                        Back-end
                    </a>
                </li>
            </ul>

            <p>
                Meu primeiro projeto na qual foi construído o front end e o back end.
            </p>
            <p>
                Do lado do cliente, foi utilizado react-router-dom para lidar com rotas em uma spa, react context para 
                toasts de notificação do status de emails enviados e componentes modais para facilitar a usuabilidade,
                tendo assim de lidar com state, renderização condicional e entender o ciclo de vida do componente.
                Também foi criado um hook para lidar com o formulário de envio dos emails, 
                responsável não só por alterar as informações, mas também validar erros.
            </p>
            <p>
                Do lado do servidor, foi utilizado express e nodemailer, esses são meus primeiros códigos em back end.
            </p>
            <p>
                Simples, porém importante para entender como funciona uma api no lado do servidor, 
                aplicando conceitos de rotas, respostas, headers, métodos e status http, variáveis de ambiente
                e aprendendo a fazer o primeiro deploy no heroku.
            </p>
            <p>
                Para mais projetos incríveis como esse, visite <a href={links.github} className='link'>meu github</a>.
            </p>
        </main>
    );
}