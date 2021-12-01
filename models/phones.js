const mongoose = require("mongoose") 
const phonesSchema = mongoose.Schema({ 
    pName: String, 
    pPixels: {
        type: String,
        min: 1,
        max: 400,
      
    }, 
    pCost:{
        type: Number,
        min: 5000,
        max: 6000,
      
    }
}) 
 
module.exports = mongoose.model("phones", 
phonesSchema) 