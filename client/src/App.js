import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Welcome from './Routes/Welcome/Welcome';
import HomeLexer from './Routes/HomeLexer/HomeLexer';
import Employees from './Routes/Employees/Employees';
import EmployeesSettings from './Routes/EmployeesSettings/EmployeesSettings';
import EmployeesNew from './Routes/EmployeesNew/EmployeesNew';
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
          <Route path="/EmployeesSettings/:id/edit" element={<EmployeesSettings />} />
          <Route path="/EmployeesNew/new" element={<EmployeesNew />} />
        </Routes>
        <Footer />
      </div>
 
  )
} 

export default App