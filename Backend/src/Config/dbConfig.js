const mongoose=require('mongoose')
const myConnection=async()=>{
    try{
        await mongoose.connect(process.env.url)
        console.log('Connection successfull')
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports=myConnection