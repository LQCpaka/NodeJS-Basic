const express = require("express");
const userController  = require("../controllers/usercontroller")
const khoaHocRouter = require("./khoahocrouters");
const userRouter = require("./userrouter");
userController.get('/list',userController.userList);
userController.get('/add',userController.userAdd);
userController.get('/edit/:id',userController.userEdit);
userController.get('/delete/:id',userController.UserDelete);
module.exports=rootRouter;