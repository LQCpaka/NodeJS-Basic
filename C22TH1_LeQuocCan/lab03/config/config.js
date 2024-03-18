const config =(app) =>{
    //thiết lập cấu hình view engine sử dụng EJS
    app.set('view engine','ejs');
    app.set('view','view');
}
module.exports = config;