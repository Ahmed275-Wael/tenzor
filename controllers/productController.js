//const order = require("../models/order");
//const orderedProduct = require("../models/orderedProduct");
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
        const fieldsToFilter = ["name","price","image","methodOfPayment"];
            const filteredUser = test.FilterOneObject(product, fieldsToFilter);
           // console.log(filteredUser);
            res.status(202).json({
                    product : filteredUser,
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
        const fieldsToFilter = ["name","price","image"];
            const filteredUser = test.FilterOneObject(product, fieldsToFilter);
        if (product) {
                res.status(202).json({
                    productInfo : filteredUser,
                    status:"success"
                })
        } else {
            res.status(404).json({
                status:"failed",
                message:"no user found with this id"
            });
        }
 });
 exports.getAllProducts = catchAsync(async (req, res, next) => {
        const product = await  ProductModel.findAll();
        const fieldsToFilter = ["id","name","price","image"];
            const filteredUser = test.FilterMultipleObjects(product, fieldsToFilter);
        if (product) {
                res.status(202).json({
                    productInfo : filteredUser,
                    status:"success"
                })
        } else {
            res.status(404).json({
                status:"failed",
                message:"no user found with this id"
            });
        }
 });
 