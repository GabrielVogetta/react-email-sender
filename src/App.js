import './App.css';
import Toast from './components/Toast';
import MainHeader from './components/MainHeader';
import Form from './components/Form';

function App() {

  return (
    <div className='app'>

      <Toast/>

      <div className='box'>

        <MainHeader/>

        <Form/>
      </div>

    </div>
  );
}

export default App;
