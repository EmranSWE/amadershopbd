const { createCategoryService, getCategoryService, getCategoryServiceById, patchCategoryServiceById } = require("../services/category.service")

//Post a new categorize
exports.createCategory = async(req,res,next)=>{
    try {
        const result= await createCategoryService(req.body);
        res.status(200).json({
            status:"Success",
            message:"Successfully created the brand",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            error:"Couldn't create the brand"
        })
    }
}

//Get all categorize
exports.getCategory = async(req,res,next)=>{
    try {
        const result= await getCategoryService();
        res.status(200).json({
            status:"Success",
            message:"Successfully created the brand",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            error:"Couldn't create the brand"
        })
    }
}


//Get a categorize
exports.getCategoryById = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const result = await getCategoryServiceById(id);
        res.status(200).json({
            status:"Success",
            message:"Successfully created the brand",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            error:"Couldn't create the brand"
        })
    }
}

//Patch a categorize
exports.patchCategoryById = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const result = await patchCategoryServiceById(id,req.body);
        res.status(200).json({
            status:"Success",
            message:"Successfully created the brand",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            error:"Couldn't create the brand"
        })
    }
}