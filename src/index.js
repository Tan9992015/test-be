const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes');

dotenv.config()
const app = express()
const port = process.env.SERVER_URL || 3003
mongoose.connect(`mongodb+srv://tan9992015:${process.env.MONGO_DB}@cluster0.comarde.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Kết nối mongoose thành công");
    })
    .catch(err => {
        console.log(err);
    });
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET','PUT','POST','DELETE']
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

routes(app)
app.listen(port, ()=> {
    console.log("Server đang chạy trên cổng: " + port)
})