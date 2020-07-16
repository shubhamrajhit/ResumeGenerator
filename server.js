const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

//Upload Endpoint

app.post('/upload',(req,res)=>{
    if(req.file === null){
        return res.status(400).json({msg:'No file Uploaded'});
    }
    const file = req.files.file;

    file.mv(`${__dirname}/client/public/upload/${file.name}`,err=>{
        if(err){
            console.log(err);
            return res.status(500).send(err)
        }
        res.json({fileName:file.name , filePath:`/upload/${file.name}`});
    });
});
app.post('/signup' ,(req,res)=>{
    console.log(req.user)
})

app.listen(5000, ()=> console.log('Server Started....'))