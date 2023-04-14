import React from 'react'
import { TableContainer} from '@material-ui/core';
import TableEmployees from '../../Components/TableEmployees/TableEmployees';
import EmployeesNew from '../../Routes/EmployeesNew/EmployeesNew';

import "./Assets/styles.css"

const Employees =()=> {

  return (
          <div className='containedForm'>
              <div> 
{/*
*
*------------NEW EMPLEOYEES API ------------
*
*/}
                  <EmployeesNew/>
              </div>

              <div className='containedTableEmployees'>
                  <TableContainer>
{/*
*
*------------DATA TABLE  EMPLEOYEES API ------------
*
*/}
                        <TableEmployees/> 
                  </TableContainer>
              </div>
          </div>
  );
}



export default Employees







