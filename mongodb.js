const mongoose=require("mongoose")

mongoose.connect("mongodb://0.0.0.1:27017/Login")
.then(() => {
    console.log("MongoDB connected successfully");
  })
.catch(()=>{
    console.log("failed to connected");
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection=new mongoose.model("Collection",logInSchema)

module.exports=collection
