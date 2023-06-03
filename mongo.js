const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://rocabertemarky09:123rocaberte@cluster0.qthhseb.mongodb.net/example")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("single",newSchema)
module.exports=collection