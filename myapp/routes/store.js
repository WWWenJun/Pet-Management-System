var express = require('express');
var router = express.Router();

const { uploadFile } = require("../util/upload.js");
const { addStore,getStore,deleteStore,updateStore } = require("../service/storeService.js");

router.post('/addStore', async function (req, res, next) {
    res.send(await addStore(req.body));
});
router.get('/getStore', async function (req, res, next) {
    res.send(await getStore(req.query));
});

router.post('/deleteStore', async (req, res) => {
    res.send(await deleteStore(req.body));
});
router.post('/updateStore', async (req, res) => {
    res.send(await updateStore(req.body));
});

// 图片上传
router.post('/addImages', async function (req, res, next) {
    const data = await uploadFile(req, res, {
        fileType: "storeLicense", 
        path: "./public/images"
    });
    res.send(data);
});
module.exports = router;
