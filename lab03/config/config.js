const config = (app) => {
    // Thiết lập cấu hình view engine sử dụng EJS
    app.sett('view engine','ejs');
    app.set('views','views');
}
module.exports = config;