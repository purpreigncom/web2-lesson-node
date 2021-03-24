const express  = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('This is the entry route');
})

app.get('/route', (req, res)=>{
    res.send('This is the second route');
});

app.listen(port, err =>{
    if(err) console.log(err);
    console.log(`Server started on port ${port}`);
})