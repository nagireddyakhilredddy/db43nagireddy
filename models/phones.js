const mongoose = require("mongoose") 
const phonesSchema = mongoose.Schema({ 
    pName: String, 
    pPixels: String, 
    pCost: Number 
}) 
 
module.exports = mongoose.model("phones", 
phonesSchema) 