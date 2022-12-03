const express = require('express') ; 
const notes = require('../data/notes');
const dotenv = require('dotenv') ;

const app = express() ;
dotenv.config();


app.get('/' , (req,res)=>{
    res.send("API is Running ");
});

app.get('/api/notes' , (req,res)=>{
    res.json(notes);
});

app.get('/api/notes/:id' , (req,res)=>{
  let note = notes.find((e)=>{
    return e._id === req.params.id ;
  })

  res.send(note) ;
});

const PORT = process.env.PORT || 5000 ;
app.listen(PORT , console.log(`Running on port ${PORT}`)) ;
