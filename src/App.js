import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react'; 
import Header from './components/Header/Header.js';
import Main from './components/Main/Main';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer'
function App() {
  return ( 
   <Fragment> 
    <Header/>
    <Main/> 
    <Form/>
   <Footer/>
   </Fragment>
 
 )
}

export default App;
