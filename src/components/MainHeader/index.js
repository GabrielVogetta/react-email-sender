import './styles.css';
import links from '../../links.json';

const MainHeader = () => (
    <header className='mainHeader'>
        <h1 className='mainTitle'>React Email Sender</h1>

        <a href={links.repos.frontend}>
            <img src={links.icons.github} width='50px' className='githubIcon' alt='Ícone Github'/>
        </a>
    </header>
);

export default MainHeader;