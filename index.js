const exp = require('constants');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const port = 3000;
var patch = require('path');
const app = express();

var login = "admin";
var password = "123456";

app.use(session({secret:"faionfofnqfofqfonqfijj9934843nnfduf"}));
app.use(bodyParser.urlencoded({extended:true}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(patch.join(__dirname, 'public')));
app.set('views', patch.join(__dirname, '/views'));


app.post('/',(req,res)=>{
    
    if(req.body.password == password && req.body.login == login){
        //logado com sucesso!
        req.session.login = login;
        
        res.render('logado');
    
    }else{
        res.render('index');
    }
})




app.get('/',(req,res)=>{
    if(req.session.login){
        res.render('logado');
    }else{
        res.render('index');
    }
})


app.listen(port, ()=>{
    console.log('servidor rodando')
})

