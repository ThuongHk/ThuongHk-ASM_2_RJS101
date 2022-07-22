import dateFormat from "dateformat";
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {Card, CardBody, CardTitle, Navbar, NavbarBrand, CardImg, CardText } from 'reactstrap';
import  {STAFFS}  from './staffs';
import SearchStaff from './SearchStaff';

function Staff() {

    const [column, setColumn] = useState(' col-2 mt-2')
   
   

    const staffList = STAFFS.map((staff) => {
              return (   
                
                <div className={column}  key={staff.id}>
         <Link  to={`/staff/${staff.id}`}>
          
            <Card 
            style = {{backgroundColor: '#C6E5EE', cursor: 'pointer'}}            
                         
              >
               <CardImg  src={staff.image} alt={staff.name}/>
              <CardBody>              
                <CardTitle className='text-center'>{staff.name}</CardTitle>
              </CardBody>
            </Card>
         
           </Link>
           </div>        
                 
        );

    }) 
    
// console.log(showStaff);
   
    return (         
       <div className='container'>      
         <div className='text-center'>
                 <h6 className='text-danger'>Chọn cột hiển thị</h6>
                <button className='bg-warning text-danger btn btn-info btn-sm mr-2' onClick={()=>{setColumn(' col-6 mt-2')}}>2</button>
                <button className='bg-warning text-danger btn btn-info btn-sm mr-2' onClick={()=>{setColumn(' col-4  mt-2')}}>3</button>
                <button className='bg-warning text-danger btn btn-info btn-sm mr-2' onClick={()=>{setColumn(' col-3  mt-2')}}>4</button>
                <button className='bg-warning text-danger btn btn-info btn-sm mr-2' onClick={()=>{setColumn(' col-2  mt-2')}}>6</button>
                </div>
       <SearchStaff/>
     <div className='row'>{staffList}</div>    
       </div>
     );
}

export default Staff;