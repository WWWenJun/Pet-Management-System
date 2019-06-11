const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/mySystem'; // 其中 test 为连接的数据库名称
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', function() {
console.log('Mongoose connected to ' + dbURI);
});

require("./models/clerkModel");
require("./models/serveModel");
require("./models/managerModel");
require("./models/goodsMethodModel.js");
require("./models/goodsModel.js");
require("./models/goodsOneModel.js");
require("./models/goodsSuitModel.js");
require("./models/goodsTypeModel.js");
require("./models/storeusersModel.js");
require("./models/supplierModel.js");
require("./models/petMasterModel.js");
require("./models/storeModel");
require("./models/orderModel");
