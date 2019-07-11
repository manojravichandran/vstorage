const express=require('express');

const router=express.Router();
const mongoose=require('mongoose');
const uri = "mongodb+srv://<>:<>@cluster0-dw8dl.gcp.mongodb.net/test?retryWrites=true&w=majority";



mongoose.Promise=global.Promise;

mongoose.connect(uri,{ useNewUrlParser: true },function(err){
    

if(err)
{
    console.log("Error !"+err);
}


});
router.get('/',function(req,res){

    res.send('<h1>hey there</h1>');
});

module.exports=router;
