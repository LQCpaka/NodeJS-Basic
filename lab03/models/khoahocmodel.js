const khoaHocs=[
    {id:1,tenKhoaHoc:"Thiết kế web",donGia:250000,giaoVien:"Lê Hùng"},
    {id:2,tenKhoaHoc:"Lập trình ASP.NET",donGia:240000,giaoVien:"Lê Huy"},
    {id:3,tenKhoaHoc:"Lập trình hướng đối tượng",donGia:230000,giaoVien:"Lê Anh"},
    {id:4,tenKhoaHoc:"Lập trình PHP",donGia:220000,giaoVien:"Lê Mạnh"},
];
const khoaHocTim = (id) =>{
    return khoaHocs.find((kh)=> kh.id = id)
}

module.exports = {
    khoaHocTim,
}