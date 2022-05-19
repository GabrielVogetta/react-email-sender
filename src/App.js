import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './routes';
import MainHeader from './components/MainHeader';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className='app'>
      <Router>
        <MainHeader/>
        <Pages/>
        <NavBar/>
      </Router>
    </div>
  );
}

export default App;
