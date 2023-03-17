const Brand = require("../model/Brand")

exports.createBrandService = async(data)=>{
    console.log(data)
    const result = await Brand.create(data);
    console.log(result)
    return result;
}

exports.getBrandService = async()=>{
    const brands = await Brand.find({}).select('-products -suppliers');
    return brands;
}


exports.getBrandByIdService = async(id)=>{
    const brand = await Brand.findOne({_id:id});

    if(!brand){
        return res.status(400).json({
            status:"Fail",
            error:"Couldn't find a brand with this id"
        })
    }
    return brand;
}



exports.updateBrandById = async(id,data)=>{
    const brand = await Brand.updateOne({_id:id},data,{runValidators:true});
    return brand;
}
