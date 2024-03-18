const express = require('express');
const config =require("./config/config");
const rootRouter = require("./routes/rootroute");
const app =express();
const port = 3000;


config(app);

app.use('/',rootRouter);

app.listen(port,() => {
    console.log(`server đang chạy tại http://localhost:${port}`);
});