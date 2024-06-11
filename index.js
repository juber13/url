import express from 'express';
const app = express();
import { nanoid } from 'nanoid';
import conectDB  from './db/connection.js'
import path from 'path'
import os from 'os'


console.log(os.cpus().length)


app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('view engine' , 'ejs');
app.set('views' , path.resolve("./views"))

app.get('/template' , (req , res) => {
    res.render("home" , {
        users : ["Sahil" , "Rohan" , "anil"]
    });
})

conectDB().then(() => console.log('DB Connected!'));





import { router } from './routes/url.js'

app.use('/', router)


app.listen(5050 || 8080, () => {
    console.log('server is running');
})