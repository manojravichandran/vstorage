const mongoose =require('mongoose');
const schema=mongoose.Schema;

const videoS=new schema({
title:String,
url:String,

});

module.exports=mongoose.model('video',videoS,'videos');