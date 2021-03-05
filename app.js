var express=require('express');
var app=express();
app.use('/assets',express.static('assets'));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.get('/kmz',function(req,res){
    res.sendFile(__dirname+'/Kmz test.html');
});

app.listen(8080);