const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ciednermabale:09205166719W!cked@cluster0.5lga3fu.mongodb.net/users")
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
    vehicle:{
        type:String,
        required:true
    },
    plate:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection