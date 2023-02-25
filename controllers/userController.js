 

const user = require("../models/user");
const Model = require("../models");
const userModel = Model.User;
const authTools = require("../utilis/authTools");
const test = require("../test");
const catchAsync = require("../utilis/catchAsync");
exports.getUser = catchAsync(async (req, res, next) => {
    const userId = req.params.userId;
        const user = await  userModel.findOne({where : {id:userId}});
        if (user) {
            const fieldsToFilter = ["email","firstName","lastName","gender","phoneNumber","image"];
            const filteredUser = test.FilterOneObject(user, fieldsToFilter);
                res.status(202).json({
                    userInfo:filteredUser,
                    status:"success"
                })
        } else {
            res.status(404).json({
                status:"failed",
                message:"no user found with this id"
            });
        }
 });
 