const express = require("express");
const khoaHocRouter = require("./khoahocroutes");
const userRouter = require("./userroutes");
const rootRouter = express.Router();
rootRouter.use('/khoaHoc',khoaHocRouter);
khoaHocRouter.use('/users',userRouter);
rootRouter.get('/',(req,res) =>{
    res.render("homePage");
})
module.exports = rootRouter;