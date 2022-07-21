import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Department from './Department/Department';
import Salary from './Salary/Salary';
import Staff from './Staff/Staff';
import NotFound from './Notfound/NotFound';

// import DetaiStaff from './Staff/DetaiStaff';
import DetailStaff from './Staff/DetailStaff';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<App />}>
        <Route path='staff' element = {<Staff />}/>
        <Route path='staff/:id' element = {<DetailStaff />}/>
        <Route path='department' element = {<Department />}/>
        <Route path='salary' element = {<Salary />}/>
        <Route path='*' element = {<NotFound />}/>
       
      </Route>
    </Routes>
    </BrowserRouter>   

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
