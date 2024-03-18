const expess = require("express");
const userRouter = require("./userroute");
const khoahocrouter = require("./khoahocroutes");
const rootRouter = expess.Router();
rootRouter.use('/khoaHoc',khoahocrouter);
rootRouter.use('/users',userRouter);
rootRouter.get('/',(req,res)=>{
    res.render("homePage");
})
module.exports=rootRouter;