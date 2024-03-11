const expess = require("express");
const userRouter = expess.Router();

userRouter.get('/list',(req,res) => {
    res.render('listUser');
});
userRouter.get('/add', (req,res) => {
    res.render('addUser');
});
userRouter.get('/edit/:id', (req,res) => {
    res.render('editUser');
});
userRouter.get('/delete/:id', (req,res) => {
    res.render('delUser');
});
module.exports=userRouter;