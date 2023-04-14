import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Welcome from './Routes/Welcome/Welcome';
import HomeLexer from './Routes/HomeLexer/HomeLexer';
import Employees from './Routes/Employees/Employees';
import EmployeesSettings from './Routes/EmployeesSettings/EmployeesSettings';
import EmployeesEdit from './Routes/EmployeesEdit/EmployeesEdit';
import EmployeesUpdate from './Routes/EmployeesUpdate/EmployeesUpdate';
/* import Nurse from './Routes/Nurse/Nurse'; */
import Footer from './Components/Footer/Footer';


import "./app.css"






const App = () => {
  return (

      <div className='app'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Welcome />}/>
          <Route path='/homeLexer' element={<HomeLexer />}/>
          <Route path='/Employees' element={<Employees/>}/>
          <Route path='/EmployeesSettings' element={<EmployeesSettings/>}/>
          <Route path='/EmployeesEdit' element={<EmployeesEdit/>}/>
          <Route path='/EmployeesUpdate' element={<EmployeesUpdate/>}/>
         {/*  <Route path='/doctor/:id' element={<Doctor />} /> */}
         
        </Routes>
        <Footer />
      </div>
 
  )
} 

export default App