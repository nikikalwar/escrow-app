import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Home } from './Home';
import { Layout } from './Layouts';
import { About } from './Home/about';
import { Contact } from './Home/contact';
import { SignIn } from './Home/signin';
import { SignUp } from './Home/signup';
import 'bootstrap/dist/css/bootstrap.css';
import { Glowing } from './Glowing/index';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/escrow-app' element = {<Home/>}></Route>
        <Route path = '/' element = {<Home/>}></Route>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
