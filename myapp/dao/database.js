const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/mySystem'; // 其中 test 为连接的数据库名称
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', function() {
console.log('Mongoose connected to ' + dbURI);
});

// require("./models/usersModel");
// require("./models/userYModel");
// require("./models/theatersModel");
// require("./models/seatStatusModel");
// require("./models/seatsModel");
// require("./models/schedulesModel");
// require("./models/ordersModel");
// require("./models/moviesModel");
// require("./models/cinemasModel");
// require("./models/goodsMethodModel.js");
// require("./models/goodsModel.js");
// require("./models/goodsOneModel.js");
// require("./models/goodsSuitModel.js");
// require("./models/goodsTypeModel.js");
require("./models/storeModel");
