import {Outlet} from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import Footer from './Footer/Footer';
import './App.css';


export default function App() {
  return (
    <div>
       <Navbar color='primary' className='nav'>
             
             <NavbarBrand color='primary' className='navb text-light'>
                <i className="fas fa-cannabis"></i>{'  '}
               <NavLink to='/staff' style={isActive => ({  color: isActive ? "pink" : "green"  })}  > <i className="fas fa-clipboard-user"></i> <small>Nhân Viên</small> </NavLink >{'  '}
                <NavLink to='department' style={isActive => ({  color: isActive ? "pink" : "green"  })}   > <i className="fas fa-id-card-alt"></i> <small> Phòng Ban</small></NavLink > {'  '}
               <NavLink to='/salary' style={isActive => ({  color: isActive ? "pink" : "green"  })}   ><i class="fa-solid fa-money-bill-1"></i><small>Bảng Lương</small></NavLink >
               </NavbarBrand>         
            
           </Navbar>
         
    <Outlet/>
    <Footer/>
    </div>
  )
}