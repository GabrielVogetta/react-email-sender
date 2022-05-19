import {
    Routes,
    Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/404';

export default function Pages(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<Page404/>}/>
        </Routes>
    );
}