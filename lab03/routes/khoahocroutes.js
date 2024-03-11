const expess = require("express");
const khoaHocRouter = expess.Router();

khoaHocRouter.get('/list',(req,res) => {
    res.render('listKhoaHoc');
});
khoaHocRouter.get('/add', (req,res) => {
    res.render('addkhoaHoc');
});
khoaHocRouter.get('/edit/:id', (req,res) => {
    res.render('editkhoaHoc');
});
khoaHocRouter.get('/delete/:id', (req,res) => {
    res.render('delkhoaHoc');
});
module.exports=khoaHocRouter;