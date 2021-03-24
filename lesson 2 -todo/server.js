const express= require('express');
const app = express();

const port = process.env.PORT || 5001;

//db
const con  = require('./db');


app.get('/', (req, res)=>{
    res.send("Hellp");
})

app.get('/todos', (req, res)=> {
    const data  = []
    const query  = "SELECT * FROM todo";
    con.query(query, (err, results, fields)=>{
        const text  = results.map(item =>({
            id : item.id,
            text : item.text
        }))

        console.log(text)

    })

    
})

app.listen(port, err  => err  ? console.log(err) :  console.log(`Server started on port ${port}`));