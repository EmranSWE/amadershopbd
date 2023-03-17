const  {createBrandService, getBrandService, getBrandByIdService, updateBrandById}  = require("../services/brand.service");

exports.createBrand = async(req,res,next)=>{
    try {
        const result= await createBrandService(req.body);
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

exports.getBrand = async(req,res,next)=>{
    try {
        const brands= await getBrandService();
        res.status(200).json({
            status:"Success",
            message:"Successfully created the brand",
            data:brands
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            error:"Couldn't create the brand"
        })
    }
}

exports.getBrandById = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const brand = await getBrandByIdService(id);
        res.status(200).json({
            status:"Success",
            message:"Successfully created the brand",
            data:brand
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            error:"Couldn't create the brand"
        })
    }
}

exports.updateBrand = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const result = await updateBrandById(id,req.body);
        console.log(result);
       
        res.status(200).json({
            status:"Success",
            message:"Successfully updated the brand"       
        })
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            error:"Couldn't create the brand"
        })
    }
}