import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import {Button , Card, CardContent, Typography} from '@material-ui/core';

import "./Assets/styles.css"


const TableEmployees = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();
  
    const loadTasks = async () => {
      const response = await fetch("http://localhost:4000/tasks");
      const data = await response.json();
      setTasks(data);
    };
  
    const handleDelete = async (id) => {
      try {
        await fetch(`http://localhost:4000/tasks/${id}`, {
          method: "DELETE",
        });
        setTasks(tasks.filter((task) => task.id !== id));
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      loadTasks();
    }, []);
  
    return (
      <>
       <div className='tittleTable'>
          <h2>Registro De Empleados</h2>
       </div >
        <div className='itemTable'>

        {tasks.map((task) => (
          <Card
            style={{
              marginBottom: ".7rem",
              backgroundColor: "#EDEDED",
            }}
          >
            <CardContent
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  color: "black",
                }}
              >
                <Typography className='paragraph'><strong>Id: </strong>{task.id}</Typography>
                <Typography className='paragraph'><strong>Nombre: </strong>{task.name}</Typography>
                <Typography className='paragraph'><strong>Primer Apellido: </strong>{task.lastname}</Typography>
                <Typography className='paragraph'><strong>Segundo Apellido: </strong>{task.secondsurname}</Typography>
                <Typography className='paragraph'><strong>Departamento: </strong>{task.department}</Typography>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => navigate(`/EmployeesSettings/${task.id}/edit`)}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => handleDelete(task.id)}
                  style={{ marginLeft: ".5rem" }}
                >
                  Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        </div>
      </>
    );
  };

  export default TableEmployees