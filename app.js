const koa = require('koa')
const json = require('koa-json')
const mongoose = require('mongoose')
const jokesRouter = require('./server/routes/joke')
require('dotenv').config();


//stand up koa, router, mongoose, and db
const app = new koa()
const db = mongoose.connection
const host = process.env.DB_CONNECTION
const dbUpdate = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(host, dbUpdate).then(() => {
    console.log("connected to mongoDB...");
});

//middleware
app.use(json())
app.use(jokesRouter.routes()).use(jokesRouter.allowedMethods())

const port = process.env.port || 3000

app.listen(port, () => console.log(`Listening on port 3000...`))

