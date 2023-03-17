const mongoose = require('mongoose');
const app = require("./app");
require('dotenv').config()
const port = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('Database connected successfully!')
})

app.listen(port,()=>{
    console.log("Server is running!")
});