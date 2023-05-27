import express from 'express';
import sequelize from './config/database.js';
// import User from './models/user.js';
import cors from 'cors';
import userRouter from './routes/userRouter.js';


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res, next)=>{
    res.send("Hello World")
})

app.get('/test', (req, res, next)=>{
    res.send("Testing")
})

app.use('/api/v1', userRouter)

app.use((error, req, res, next)=>{
    console.log(error)
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message: message})
})

// app.listen( process.env.PORT || 3000 ,console.log("Server is Running"))

sequelize
    .sync()
    .then(result =>{
        console.log("Database connected")
        app.listen(process.env.PORT || 3000)
    })
    .catch(err => console.log(err))