const mongoose = require("mongoose")
const validator = require("validator");
const {ObjectId} = mongoose.Schema.Types;


//Three steps of Mongoose==> Schema=>Model=>Controller
const storeSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"Please provide a brand name"],
        lowercase:true,
        // enum:{
        //     values:["Dhaka","Chittagong","Chandpur","Rajshahi","Barisal","Khulna","Mymanshing"],
        //     message:"{VALUE} is not valid name"
        // }
    },
    description:{
        type:String,
    },
        status:{
            type:String,
            enum:["active","inactive"],
            default:"active"
        },
        manager: {
            name: String,
            contactNumber:String,
            id: {
                type:ObjectId,
                ref:"User"
            }
        }
},
{
    timestamps:true
});

const Store = mongoose.model("Store",storeSchema);
module.exports = Store