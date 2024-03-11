const userList = (req,res) =>{
    res.render('listKhoaHoc');
}
const userAdd = (req,res) =>{
    res.render('addKhoaHoc');
}
const userEdit = (req,res) =>{
    res.render('editKhoaHoc');
}
const UserDelete = (req,res) =>{
    res.render('delKhoaHoc');
}

module.exports ={
    userList,
    userAdd,
    userEdit,
    UserDelete
}