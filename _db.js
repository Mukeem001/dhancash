const mongoose = require('mongoose');

const mongooseURI=("mongodb+srv://mohdmukeem01:Max01maxico@cluster0.alsuz.mongodb.net/dhancash");
const mongooseCon =  ()=>
{ 
    mongoose.connect(mongooseURI);

}


module.exports = mongooseCon;