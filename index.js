import express from 'express'
import Mongoose from 'mongoose'
import router from './routes/route.js'
import SepatuRoute from './routes/sepatuRoute.js'


const app = express()
const port = 3000
app.use(express.json());
app.use('/notification', router);
app.use('/sepatu', SepatuRoute);
//database mongodb connection 
Mongoose.connect("mongodb://localhost:27017/test_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = Mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('database connected'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))