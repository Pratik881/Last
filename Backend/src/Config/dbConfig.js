const mongoose=require('mongoose')
const myConnection=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/project')
        console.log('Connection successfull')
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports=myConnection