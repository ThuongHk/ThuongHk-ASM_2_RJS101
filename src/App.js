import {Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import Footer from './Footer/Footer';
import './App.css';


export default function App() {
  return (
    <div>
       <Navbar color='primary' className='nav'>
             
             <NavbarBrand color='primary' className='navb text-light'>
                <i className="fas fa-cannabis"></i>{'  '}
               <Link   
                to='/staff' > <i className="fas fa-clipboard-user"></i> <small>Nhân Viên</small> </Link>{'  '}
                <Link 
                 to='department'  > <i className="fas fa-id-card-alt"></i> <small> Phòng Ban</small></Link> {'  '}
               <Link 
                to='/salary'  ><i class="fa-solid fa-money-bill-1"></i><small>Bảng Lương</small></Link>
               </NavbarBrand>         
            
           </Navbar>
         
    <Outlet/>
    <Footer/>
    </div>
  )
}