const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindAndModify: false
}).then(() => console.log('DB connection successful! ...'))

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`APP running on port ${PORT}`)
})
