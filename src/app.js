const express = require(`express`);
const path = require(`path`);
const app = express();

app.use(express.static(path.join(__dirname,`../public`)));

const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
    console.log(`servidor corriendo en el puerto ${PORT}`)
});

app.get(`/`, function(req,res){
    res.sendFile(path.join(__dirname,`views/home.html`))
});

app.get(`/crearProducto`, function(req,res){
    res.sendFile(path.join(__dirname,`views/crearProducto.html`))
});

app.get(`/register`, function(req,res){
    res.sendFile(path.join(__dirname,`views/register.html`))
});

app.get(`/login`, function(req,res){
    res.sendFile(path.join(__dirname,`views/login.html`))
});