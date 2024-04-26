const express=require('express')
const cors=require('cors')
const myConnection=require('../Backend/src/Config/dbConfig')
const routes=require('../Backend/src/Routes/blogRoutes')
const app=express()
app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
myConnection()
const PORT=process.env.PORT||5000
app.use('/',routes)
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})