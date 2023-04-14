import React from 'react'
import { CardContent } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import "./Assets/styles.css"

const HomeLexer =()=>{
  return (
    <div className='containedHomeLexer'>
      <div className='containedHomeLexer-body'>

       
          <CardContent className='gridsCardHome'>
         <div className='itemTittle'>
         <h2>Sus Empleados En Un Click</h2>
         </div>
  
  <div className='itemTittle'>
  <p>el nuevo software administrativo de lexer le permitira.</p>
  </div>
  <div className='itemTittle'>
  <ul>
    <li>Edite</li>
    <li>Elimine</li>
    <li>Actualice</li> 
    <li>Consulte</li>
  </ul>
  </div>
  
  <div  className="contained-buttonWelcome">
  <NavLink className="navlinks" to="/Employees">
        <Button   className="buttonWelcome"  variant="contained">Iniciar</Button>
        </NavLink>
        </div>
          </CardContent>
        
      


      </div>
    </div>
  );
}

export default HomeLexer



