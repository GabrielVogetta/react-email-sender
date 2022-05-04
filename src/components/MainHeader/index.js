import './styles.css';

const MainHeader = () => (
    <header className='mainHeader'>
        <img
            src='./email.svg' 
            width='30px' 
            height='30px'
        />
        <h1 className='mainTitle'>React Email Sender</h1>
    </header>
);

export default MainHeader;