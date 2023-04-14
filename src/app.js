const express = require('express')
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE


const app = express()

/* Middlewares */
app.use(methodOverride('_method')); // Para poder pisar el method="POST" en el formulario por PUT y DELETE

// Route System require and use()
const indexRouter = require('./routes/index.js')


//npm start
app.listen(process.env.PORT || 3030, () => console.log('Servidor corriendo'))


//pagina home
//usar localhost:3030/
app.use('/', indexRouter)



// ************ NO TOCAR ************
// ************ catch 404 and forward to error handler ************

app.use(function(req, res, next) {
    next(createError(404))
  })
  



  // ************ error handler ************
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.path = req.path
    res.locals.error = req.app.get('env') === 'development' ? err : {} 
  
    // render the error page
    res.status(err.status || 500)
    res.render('error')
  })
  