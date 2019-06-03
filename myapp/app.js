var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session=require("express-session")

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const goodsRouter = require("./routes/goods.js");
const goodsMethodRouter = require("./routes/goodsMethod.js");
const goodsOneRouter = require("./routes/goodsOne.js");
const goodsSuitRouter = require("./routes/goodsSuit.js");
const goodsTypeRouter = require("./routes/goodsType.js");
<<<<<<< HEAD
const supplierRouter = require("./routes/supplier.js");
const petMasterRouter = require("./routes/petMaster.js");
=======
const serviesRouter = require("./routes/servies.js");
const managersRouter = require("./routes/managers.js");
const clerksRouter = require("./routes/clerks.js");
>>>>>>> a6b30efcc6111f12867d352506b814d315ba1280
const storeRouter=require("./routes/store")


require("./dao/database");

var app = express();
//cors跨域配置信息
var allowCrossDomain=function (req,res,next){
  //自定义中间件，设置跨域需要的响应头
  res.header('Access-Control-Allow-Origin','*');//允许的域名（*所有域）
  next();
};
app.use(allowCrossDomain)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'abc',
  saveUninitialized:true,
  resave:false
}))

// app.use('/',indexRouter);
// app.use('/', indexRouter);
app.use('/goods', goodsRouter);
app.use('/goodsMethod', goodsMethodRouter);
app.use('/goodsOne', goodsOneRouter);
app.use('/goodsSuit', goodsSuitRouter);
app.use('/goodsType', goodsTypeRouter);
app.use('/servies', serviesRouter);
app.use('/managers', managersRouter);
app.use('/clerks', clerksRouter);
app.use('/store', storeRouter);
app.use('/supplier',supplierRouter);
app.use('/petMaster',petMasterRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen('3001', function () {
  console.log("3001端口启动成功！");
});
