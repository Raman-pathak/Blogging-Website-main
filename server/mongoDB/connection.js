const mongoose=require('mongoose')
const url="mongodb+srv://gopeshpathak322:gopesh2233@cluster.bchgxcf.mongodb.net"
const mongoConnection=()=>{
  try {
    mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})
    console.log("MongoDB Connected")
    
  } catch (error) {
    console.log("Error while connecting mongoDB")
  }
}
module.exports=mongoConnection