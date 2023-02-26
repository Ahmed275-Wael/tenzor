//const order = require("../models/order");
//const orderedProduct = require("../models/orderedProduct");
const Model = require("../models");
const test = require("../test");
const orderModel = Model.order;
const orderProductModel = Model.orderedProduct;
const catchAsync = require("../utilis/catchAsync");

exports.createOrder = catchAsync(async (req, res, next) => {
    
    const orderData ={
         userId : req.body.userId,
         orderDate : (new Date(Date.now())).toISOString()
        };
      
        const order = await  orderModel.create(orderData);
    const orderedProductData = {
         orderId : order.id,
         productId : req.body.productId
    };
    const orderProduct = await  orderProductModel.create(orderedProductData);

            res.status(202).json({
                    orderInfo:orderData,
                  //  productInfo:orderedProductData.productId,
                    status:"success"
                })
 });
 
 exports.deleteOrder = catchAsync(async (req, res, next) => {
    const orderId = req.params.orderId;
        const deletedOrderedProduct = await  orderProductModel.destroy({
            where : {
                orderid : orderId 
            }
        });
        const deletedOrder = await  orderModel.destroy({
            where : {
                id : orderId 
            }
        });
                res.status(202).json({
                    status:"success"
                })
       
 });
exports.getOrder = catchAsync(async (req, res, next) => {
    const orderId = req.params.orderId;
    
        const order = await  orderModel.findOne({
                include:{
                    model: Model.orderedProduct,
                    // attributes: ["orderDate"],
                    required : true,
                    include : {
                        model: Model.Product, 
                        required: true 
                        }},
            where : {
                id : orderId 
            }
        });
        let orderInfo = {};
         const fields = ["name","price","image"];
               orderInfo = test.FilterOneObject(order["orderedProducts"][0]["Product"], fields);
               orderInfo["orderDate"] = order["orderDate"];
               //console.log(order[0]["Product"]["name"]);

        if (order) {
                res.status(202).json({
                    orderInfo : orderInfo,
                    status:"success"
                })
        } else {
            res.status(404).json({
                status:"failed",
                message:"no order found with this id"
            });
        }
 });
 exports.getAllOrders = catchAsync(async (req, res, next) => {
        const order = await  orderModel.findAll({
            include : { 
                model: Model.orderedProduct, 
                required: true, 
                include : {
                     model: Model.Product, 
                     required: true 
                    }}
        });
            let orders =[];
            const fields = ["name","price","image"];
            for(let i = 0 ; i< order.length;i++){
                 orders[i] = test.FilterOneObject(order[i]["orderedProducts"][0]["Product"], fields);
                 orders[i]["orderDate"] = order[i]["orderDate"];
            }


        if (order) {
                res.status(202).json({
                    orderInfo:orders,
                    status:"success"
                })
        } else {
            res.status(404).json({
                status:"failed",
                message:"no orders where found"
            });
        }
 });
 exports.getUserOrders = catchAsync(async (req, res, next) => {
    const userId = req.params.userId;
        const order = await  orderModel.findAll({
            include : { 
                model: Model.orderedProduct, 
                required: true, 
                include : {
                     model: Model.Product, 
                     required: true 
                    }},
            where : {
                userid : userId 
            }
        });
        let orders =[];
            const fields = ["name","price","image"];
            for(let i = 0 ; i< order.length;i++){
                 orders[i] = test.FilterOneObject(order[i]["orderedProducts"][0]["Product"], fields);
                 orders[i]["orderDate"] = order[i]["orderDate"];
            }
        if (order) {
                res.status(202).json({
                    orderInfo:orders,
                    status:"success"
                })
        } else {
            res.status(404).json({
                status:"failed",
                message:"no user found with this id"
            });
        }
 });

 