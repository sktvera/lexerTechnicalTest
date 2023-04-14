import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Button, Card, CardContent, Grid, TextField, Typography, CircularProgress} from "@mui/material";

import "./Assets/styles.css"

const EmployeesNew = () => {
  const [task, setTask] = useState({
    name: "",
    lastname: "",
    secondsurname: "",
    department: "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

  const loadTask = async (id) => {
    const res = await fetch("http://localhost:4000/tasks/" + id);
    const data = await res.json();
    setTask({ name: data.name, lastname: data.lastname,  secondsurname: data.secondsurname, department: data.department });
    setEditing(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (editing) {
        const response = await fetch(
          "http://localhost:4000/tasks/" + params.id,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
          }
        );
        await response.json();
      } else {
        const response = await fetch("http://localhost:4000/tasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(task),
        });
        await response.json();
      }

      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  return (
   <div className="ContainedEmployeesNew">

<Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#EDEDED",
            padding: "1rem",
          }}
        >
          <Typography className="paragraphs" variant="h5" textAlign="center" color="black">
            {editing ? "Empleado Actualizado" : "Crear Empleado"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Escribe Tu Nombre"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="name"
                onChange={handleChange}
                value={task.name}
                inputProps={{ style: { color: "black" } }}
                InputLabelProps={{ style: { color: "black" } }}
              />
              <TextField
                variant="filled"
                label="Escribe Tu Primer Apellido"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="lastname"
                onChange={handleChange}
                value={task.lastname}
                inputProps={{ style: { color: "black" } }}
                InputLabelProps={{ style: { color: "black" } }}
              />
               <TextField
                variant="filled"
                label="Escribe Tu Segundo Apellido"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="secondsurname"
                onChange={handleChange}
                value={task.secondsurname}
                inputProps={{ style: { color: "black" } }}
                InputLabelProps={{ style: { color: "black" } }}
              />
               <TextField
                variant="filled"
                label="Escribe Un Departamento"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="department"
                onChange={handleChange}
                value={task.department}
                inputProps={{ style: { color: "black" } }}
                InputLabelProps={{ style: { color: "black" } }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!task.name || !task.lastname || !task.secondsurname || !task.department}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  "Guardar"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

   </div>
  );
};

export default EmployeesNew;