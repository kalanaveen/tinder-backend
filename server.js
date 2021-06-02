import express from 'express';
import cors from 'cors';
import Cards from './dbCards.js';
import './db/conn.js';


// app config 
const app = express();
const port =process.env.PORT;


// middlewares 
app.use(express.json());
app.use(cors());


// api endpoints 
app.get("/",(req,res)=>res.status(200).send("hello sir"));

app.post("/tinder/cards",(req,res)=>{
    const dbCard = req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
});

app.get("/tinder/cards",(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});
// listener
app.listen(port,()=>console.log(`listen on local host:${port}`))