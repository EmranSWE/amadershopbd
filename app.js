const express = require('express');
const cors = require('cors');
const productRoute = require('./routes/product.route');
const brandRoute = require('./routes/brand.route');
const categoryRouter = require('./routes/category.route');
const storeRouter = require('./routes/store.router');
const app = express();
//Middleware 
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Server is running")
});


// app.use("/api/v1/product/",router);
app.use('/api/v1/brand/',brandRoute)
app.use("/api/v1/category/",categoryRouter)
app.use("/api/v1/store/",storeRouter)

module.exports = app;