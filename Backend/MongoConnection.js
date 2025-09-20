//! Necessary Dependencies
const mongoose = require("mongoose")

const ConnectMongoDB = async() => {
    return await mongoose.connect(process.env.MONGO_URI)
                                .then(() => console.log(" || Mongo DB Connected ||"))
                                .catch((err) => console.log(` Error || ${err.message}`))
                            }
                        
                            
module.exports = {
    ConnectMongoDB
}