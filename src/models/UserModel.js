const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name : {type: String},
        email: {type: String, unique: true},
        phone: {type: String},
        location: {type: String}
    },
    {
        timestamps: true
    }
)

const User1= mongoose.model("User1", userSchema)
module.exports = User1