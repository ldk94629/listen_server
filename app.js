//使用express构建web服务器
//使用express构建web服务器 --11:25
const express = require('express');
// const ajaxRouter=require('./routers/ajax.js');
const bodyParser = require('body-parser');
/*引入路由模块*/
const goods=require("./routes/goods");
const details=require("./routes/details");
const login=require("./routes/login")
const shopcart=require("./routes/shopcart")
const cors=require("cors");
var app = express();
var server = app.listen(3000);
app.use(cors({
  origin:"http://127.0.0.1:5501"
}))
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
/*使用路由器来管理路由*/
 app.use("/goods",goods);
 app.use("/details",details);
// app.use('/ajax',ajaxRouter)
app.use("/login",login);
app.use('/cart',shopcart)
 

