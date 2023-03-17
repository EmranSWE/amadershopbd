const Store = require("../model/Store")

exports.createStoreService = async(data)=>{
    console.log(data)
    const result = await Store.create(data);
    console.log(result)
    return result;
}

exports.getStoreService = async()=>{
    const store = await Store.find({}).select('-products -suppliers');
    return store;
}


exports.getStoreByIdService = async(id)=>{
    const store = await Store.findOne({_id:id});

    if(!store){
        return res.status(400).json({
            status:"Fail",
            error:"Couldn't find a brand with this id"
        })
    }
    return store;
}

exports.patchStoreServiceById = async(id,data)=>{
    const store = await Store.updateOne({_id:id},data,{runValidators:true});
    return store;
}
