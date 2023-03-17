const { createCategoryService, getCategoryService, getCategoryServiceById, patchCategoryServiceById, createStoreService, getStoreService, getStoreByIdService, patchStoreServiceById } = require("../services/store.service")

//Post a new categorize
exports.createStore= async(req,res,next)=>{
    try {
        const result = await createStoreService(req.body);
        console.log(result)
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
exports.getStore = async(req,res,next)=>{
    try {
        const result= await getStoreService();
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


//Get a store
exports.getStoreById = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const result = await getStoreByIdService(id);
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
exports.patchStoreById = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const result = await patchStoreServiceById(id,req.body);
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