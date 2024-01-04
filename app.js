
const express = require('express');
const config = require('./config.js')
const app = express();


const routesUsers = require('./src/routes/users.routes');
const routesMain = require('./src/routes/main.routes');

app.use(express.json());
app.use('/main', routesMain);
app.use('/api',routesUsers);
app.use((req,res,next)=>{
    res.json({
        message:'Route not found'
    })
})

app.listen(config.port,()=>{
    console.log(`Server running successfully on port ${config.port}`)
});