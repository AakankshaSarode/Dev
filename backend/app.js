import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import userRoutes from "./routes/user.routes.js";
import cookieParser from 'cookie-parser';
import 'dotenv/config.js'
//connect();

const port =process.env.PORT ||3000;
const app=express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser);
app.use('/users',userRoutes);
app.get('/',(req,res)=>{
    res.send("hello World !"); 
});

app.listen(port,()=>{
    console.log(port)
})
 export default app;