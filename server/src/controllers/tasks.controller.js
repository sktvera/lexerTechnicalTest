const pool = require("../db");

/*
*
* ---------- API http://localhost:4000/tasks  ---------
*
*/

/* CREATE NEW OBJECT METHOD HTTP POST */
const createTask = async (req, res, next) => {
     try {
            const { name, lastname, secondsurname, department  } = req.body;
            const newTask = await pool.query("INSERT INTO task (name, lastname, secondsurname, department) VALUES($1, $2, $3, $4) RETURNING *",
             [
              name,
              lastname,
              secondsurname,
              department
              ]
            );
            res.json(newTask.rows[0]);
          }
          catch (error) {
               next(error);
          }
};

/*
*
*
 Example: POST http://localhost:4000/tasks

{
  "name": "juanso",
  "lastname": "florezs",
  "secondsurname": "persez",
  "department": "antisoquia"
} 
*
*
*/

/* SHOW ALL OBJECTS METHOD HTTP GET */
const getAllTasks = async (req, res, next) => {
  try {
        const allTasks = await pool.query("SELECT * FROM task");
        res.json(allTasks.rows);
      }
      catch (error) {
             next(error);
      }
};

/* DISPLAY AN OBJECT BY ID METHOD HTTP GET - PARAMETERIZED ROUTE*/
const getTask = async (req, res) => {
  try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);

         if (result.rows.length === 0)
            return res.status(404).json(
              { 
                message: "Task not found" 
              }
              );
              res.json(result.rows[0]);
      }
      catch (error) {
            next(error);
      }
};

/* UPDATE OBJECTS METHOD HTTP PUT */
const updateTask = async (req, res) => {
  try {
        const { id } = req.params;
        const { name, lastname, secondsurname, department } = req.body;
        const result = await pool.query("UPDATE task SET name = $1, lastname = $2, secondsurname = $3,department = $4 WHERE id = $5 RETURNING *",
          [
            name,
            lastname,
            secondsurname,
            department,
            id

          ]
        );

    if (result.rows.length === 0)
      return res.status(404).json(
        { 
          message: "Task not found" 
        }
        );
    return res.json(result.rows[0]);
      }
      catch (error) {
           next(error);
      }
};
/* DELETE OBJECTS METHOD HTTP DELETE */
const deleteTask = async (req, res) => {
  try {
      const { id } = req.params;
      const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);

      if (result.rowCount === 0)
        return res.status(404).json(
            {
             message: "Task not found" 
            }
            );
        return res.sendStatus(204);
      }
      catch (error) {
          next(error);
      }
};

module.exports = {createTask, getAllTasks, getTask, updateTask, deleteTask};