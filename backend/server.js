const express = require('express') ; 
const notes = require('../data/notes');
const dotenv = require('dotenv') ;
const userRouters = require('./routers/userRouters');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('../middleware/errorMiddleware');

const app = express() ;
dotenv.config();
connectDB() ;

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

app.use(express.json()) ;




// app.get('/' , (req,res)=>{
//     res.send("API is Running ");
// });

// app.get('/api/notes' , (req,res)=>{
//     res.json(notes);
// });

// app.get('/api/notes/:id' , (req,res)=>{
//   let note = notes.find((e)=>{
//     return e._id === req.params.id ;
//   })

//   res.send(note) ;
// });

app.use('/api/users' , userRouters );

app.use(notFound);
app.use(errorHandler) ;

const PORT = process.env.PORT || 5000 ;
app.listen(PORT , console.log(`Running on port ${PORT}`)) ;
