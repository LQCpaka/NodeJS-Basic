const express = require("express");
const khoaHocRouter = require("./khoahocrouters");
const userRouter = require("./userrouter");
const rootRouter = express.Router();
rootRouter.use('/khoaHoc',khoaHocRouter);
rootRouter.use('/user',userRouter);
rootRouter.get('/',(req,res) => {
    res.render("homePage");
});
module.exports=rootRouter;