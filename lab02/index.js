const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine','ejs');
app.set('views','views');

app.use(express.urlencoded({extended:true}));

const khoaHocs=[
    {id:1,tenKhoaHoc:"Thiết kế web",donGia:250000,giaoVien:"Lê Hùng"},
    {id:2,tenKhoaHoc:"Lập trình ASP.NET",donGia:240000,giaoVien:"Lê Huy"},
    {id:3,tenKhoaHoc:"Lập trình hướng đối tượng",donGia:230000,giaoVien:"Lê Anh"},
    {id:4,tenKhoaHoc:"Lập trình PHP",donGia:220000,giaoVien:"Lê Mạnh"},
];

app.get('/khoahoc/list', (req,res) =>{
    res.render('dskhoahoc', {khoaHocs:khoaHocs});
});
app.get('/khoahoc/them',(req,res) =>{
    res.render('themKhoaHoc');
});

app.post('/khoahoc/them',(req,res) =>{
    let newCourse = req.body;
    newCourse.id = khoaHocs.length +1;
    khoaHocs.push(newCourse);
    res.redirect('/khoahoc/list');
});
app.get('/khoahoc/xoa/:id', (req,res)=>{
    // Xoa khoa hoc
    let id =req.params.id;
    let index = khoaHocs.findIndex((kh)=> kh.id == id);
    khoaHocs.splice(index,1);
    res.redirect('/khoahoc/list');
});

app.get('/khoahoc/sua/:id',(req,res)=>{
    let id =req.params.id;
    let khoaHoc = khoaHocs.find((kh)=> kh.id == id);
    res.render('suakhoahoc',{khoaHoc})


});
app.post('/khoahoc/sua',(req,res) =>{
    let editCourse = req.body;
    let index = khoaHocs.findIndex((kh) => kh.id = editCourse.id);
    khoaHocs[index] = editCourse;
    res.redirect('/khoahoc/list');
});
app.listen(PORT,()=>{
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
})