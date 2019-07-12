const express=require('express');  //adding express package to file..we ll never change so it's const
const bodyparser=require('body-parser'); //adding this body-parser to route between pages
const path=require('path'); //adding for accessing path to fetch file

const api=require('./server/routes/api'); // a file that displays when the /path changes 

const port =3000; / to run in that port
//const router=express.Router();
const app=express();
//

app.use(express.static(path.join(__dirname,'dist/vstorage')));

app.use(bodyparser.urlencoded({extended:true}));

app.use(bodyparser.json());

app.use('/api',api);

app.get(' ',(req,res) => {

    res.sendFile(path.join(__dirname,'dist/index.html'));
});


app.listen(port,function(){

    console.log("running in "+port);
});
