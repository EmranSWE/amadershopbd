const Category = require("../model/Category")

exports.createCategoryService = async(data)=>{
    const result = await Category.create(data);
    return result;
}

exports.getCategoryService = async()=>{
    const result = await Category.find({});
    return result;
}

exports.getCategoryServiceById = async(id)=>{
    const result = await Category.findOne({_id:id});
    return result;
}

exports.patchCategoryServiceById = async(id,data)=>{
    const result = await Category.updateOne({_id:id},data,{runValidators:true});
    return result;
}
