const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
//create a database
mongoose.connect("mongodb://0.0.0.0:27017/nodedynamicProject",{
    
}).then(()=>{
    console.log("connection successful");
}).catch((e) =>{
    console.log(e);
})