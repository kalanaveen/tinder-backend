import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path:'./.env'});
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("connection sucsess");
}).catch((err) => console.log(err));