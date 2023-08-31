const mongoose = require('mongoose');
// mongoose.set('debug', true);


const connection = mongoose.createConnection(`mongodb+srv://gomes:13X4P71SaiegHHvF@cluster0.yq7yrmn.mongodb.net/ToDoDB`).on('open',()=>{console.log("MongoDB Connected");}).on('error',()=>{
    console.log("MongoDB Connection error");
});

module.exports = connection;