//const order = require("../models/order");
//const orderedProduct = require("../models/orderedProduct");
const QueryStringBuilder = require("../utilis/QueryStringBuilder");
const Model = require("../models");
const test = require("../test");
const ProductModel = Model.Product;
const catchAsync = require("../utilis/catchAsync");

exports.createProduct = catchAsync(async (req, res, next) => {
    const productData ={
         name: req.body.name,
         price: req.body.price,
         image: req.body.image,
         methodOfPay: req.body.methodOfPayment,
         userId : req.body.userId
        };
        const product = await  ProductModel.create(productData);
           // console.log(filteredUser);
            res.status(202).json({
                    data : productData,
                    status:"success"
                })
 });

exports.getProduct = catchAsync(async (req, res, next) => {
    const productId = req.params.productId;
        const product = await  ProductModel.findOne({
            where : {
                id : productId 
            }
        });
        if (product) {
                res.status(202).json({
                    data : filteredUser,
                    status:"success"
                })
        } else {
            res.status(404).json({
                status:"failed",
                message:"No Product found with this id"
            });
        }
 });
 exports.getAllProducts = catchAsync(async (req, res, next) => {  
    const queryStringBulder = new QueryStringBuilder(req.query).paginate();
    queryStringResult = queryStringBulder.result;
    console.log(queryStringResult)
    const product = await  ProductModel.findAll({limit:queryStringResult.limit, offset:queryStringResult.offset});
 
    
        if (product) {
                res.status(202).json({
                    data : product,
                    status:"success"
                })
        } else {
            res.status(404).json({
                status:"failed",
                message:"No Products Are Avialable"
            });
        }
 });
 exports.getProductsCount = catchAsync(async (req, res, next) => {

    const productsCount = await  ProductModel.count({});
    const data = {
        count:productsCount
    }
    res.status(202).json({
        data,
        status:"success"
    });
 });