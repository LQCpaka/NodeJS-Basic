const express = require('express') ;
const config = require("./config/config");
const rootRouter = require("./router/rootrouter");
const app = express();
const port = 3000;

// Thiết lập cấu hình
config(app);

// Thiết lập router
app.use('/', rootRouter);

 app.listen(port,()=>{
     console.log(`server đang chạy tại http://localhost:${port}`);
 });