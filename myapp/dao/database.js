const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/mySystem'; // 其中 test 为连接的数据库名称
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', function() {
console.log('Mongoose connected to ' + dbURI);
});

<<<<<<< HEAD
=======
require("./models/clerkModel");
require("./models/serveModel");
require("./models/managerModel");
>>>>>>> a6b30efcc6111f12867d352506b814d315ba1280
require("./models/goodsMethodModel.js");
require("./models/goodsModel.js");
require("./models/goodsOneModel.js");
require("./models/goodsSuitModel.js");
require("./models/goodsTypeModel.js");
<<<<<<< HEAD
require("./models/supplierModel.js");
require("./models/petMasterModel.js");
=======

>>>>>>> a6b30efcc6111f12867d352506b814d315ba1280
require("./models/storeModel");
