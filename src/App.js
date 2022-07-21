import {Outlet} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import './App.css';


export default function App() {
  return (
    <div>
       <NavBar/>        
    <Outlet/>
    <Footer/>
    </div>
  )
}