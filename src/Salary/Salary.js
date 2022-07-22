import React from 'react';
import {STAFFS} from '../Staff/staffs';
import {Link} from 'react-router-dom';


function Salary() {

     function showSalary(scale, time){
        const show = scale*3000000 + time*200000
        return show
     }

    const salary = STAFFS.map(function(salary){
        return(
          <div className="col-md-4 col-sm-6 col-xs-12 mb-2 mt-3">
              <div className="card" style={{width: '18rem'}}> 
              <div className="card-body">
              <h5 className="card-title">{salary.name}</h5>
              <p>Mã nhân viên: {salary.id}</p>
              <p>Hệ số lương: {salary.salaryScale}</p>
              <p>Số ngày làm thêm: {salary.overTime}</p>
              <h6 className="card-subtitle mb-2 text-muted ">Lương: {showSalary(parseFloat(salary.salaryScale), parseFloat(salary.overTime))} {' '} VND</h6>
            </div>
          </div>
          </div>
        )
    })
    

    return (
        <div className='container'>
        <Link to='/staff'>Nhân Viên</Link> / <span>Bảng Lương</span>
            <div className='row'>{salary}</div>
           
        </div>
    );
}

export default Salary;