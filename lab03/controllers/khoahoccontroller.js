const khocHocModel = require("../models/khoahocmodel");
const khoaHocList = (req,res) =>{
    res.render('listKhoaHoc');
}
const khoaHocAdd = (req,res) =>{
    res.render('addKhoaHoc');
}
const khoaHocEdit = (req,res) =>{
    res.render('editKhoaHoc');
    let khoaHoc = khoaHocModel.khoaHocTim(id);
    res.render('editKhoaHoc',{khoaHoc});
}
const khoaHocDelete = (req,res) =>{
    res.render('delKhoaHoc');
}
module.exports ={
    userList,
    userAdd,
    userEdit,
    UserDelete
}