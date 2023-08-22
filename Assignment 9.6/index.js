const express = require('express')
const app = express()
const port = 5000

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
// app.get('/', (req, res) => {
//     var date = new Date();
//   res.send(date)
// })

app.get('/add',(req,res)=>{
    console.log('Inside add')
    
    let day= req.query.day;
    date = new Date()
    date.setDate(date.getDate() + parseInt(day,10));
    res.send(date.toLocaleDateString());
    
})
app.get('/adw',(req,res)=>{
    console.log('Inside week')
    let week = req.query.weeks;
    var date = new Date()
    var d=parseInt(week,10)
    d=d*7
    console.log(d)
    date.setDate(date.getDate()+d)
    res.send(date.toLocaleDateString());
})
app.get('/sub',(req,res)=>{
    let day = req.query.day
    let date = req.query.date
    var d= new Date(date)
    d.setDate(d.getDate()-day)
    res.send(d.toLocaleDateString());
    console.log(day,date)
})
app.listen(port, () => {
  console.log(`The app listening on port ${port}`)
})
