const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 5000;
const { sequelize, Task } = require('./scripts/DB.js');
const header = {
  'Access-Control-Allow-Origin': '*',
}
app.get('/katas', (req, res) => {
  Task.findAll().then(
    value => {
      res.status(200);
      res.header(header);
      res.send(value)
    }, reason => {
      console.log(reason);
    }
  );

});

app.get('/katas/:id',(req, res) =>{
  Task.findByPk(req.params.id).then(
    task => {
      if(!task){
        res.header(header);
        res.status(404);
        console.log(404)
      }else{
        res.header(header);
        //res.redirect(200,'/');
        // if(req.params.id == 5){
        //   console.log('redirect')
        //   res.redirect('/login')
        // }
        res.status(200);
        res.send(task.dataValues);
        
        
      }
    }
  )
})


app.use(cors({
    origin: 'http://localhost:8080'
}));

app.listen(port, () => {
  console.log("Aboba listen");
  console.log(`Server is running on: http://localhost:${port}`);
});

