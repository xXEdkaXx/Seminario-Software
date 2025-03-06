const express= require ('express');
const app= express();

app.set('view engine','ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express(express.json));

app.use('/',require('./router'));

app.listen(5000,()=>{
    console.log("sevidor local http://localhost:5000");

})

