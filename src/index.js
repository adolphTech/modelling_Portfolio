const express = require("express");
const app = express()
const path = require("path")
const hbs = require("hbs")
 
// setting port
const PORT = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = (path.join(__dirname, "../templates/partials"));

//setting up hbs  and views  
app.set("view engine", "hbs"); 
app.set("views", viewsPath); 
hbs.registerPartials(partialsPath);   
 


//static pages {css and js rendering}
app.use(express.static(publicDirectoryPath));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.json()) 

app.get("/",(req,res)=>{

res.render("index")

})

app.get("/gallery",(req,res)=>{

    res.render("gallery")
    
    })


app.listen(PORT,()=>{
    console.log(`App listening on ${PORT}`)
})