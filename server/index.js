const express = require('express')
const app = express()
// const Router = express.Router()
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

app.use(express.json());
app.use(cors());


const host = `${process.env.BASE_URL}` || "localhost";
const port = process.env.PORT || 8000

const chatRouter = require('./routes/chatRouter');

app.use('/api/v1', chatRouter);



app.listen(port, host, () =>{

    console.log(`Server running on http://${host}:${port}`);
})


