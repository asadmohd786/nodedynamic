const mongoose = require("mongoose");
//creating a database
mongoose.connect("mongo://localhost:27017/asaddynamic",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})

