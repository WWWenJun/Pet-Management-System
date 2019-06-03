var express = require('express');
var router = express.Router();

const { addManagers, getManagersByPage,removeManagers,getManagers ,getSlurManagers,changeManagers} = require("../service/managersService");

/* GET home page. */
router.post('/addManagers', async function (req, res, next) {
    res.send(await addManagers(req.body));
});
router.post('/changeManagers', async function (req, res, next) {
    res.send(await changeManagers(req.body));
});
router.get('/getManagers', async function (req, res, next) {
    res.send(await getManagers());
});
router.get('/getSlurManagers', async function (req, res, next) {
    res.send(await getSlurManagers(req.query));
});
router.get('/getManagersByPage', async function (req, res, next) {
    res.send(await getManagersByPage(req.query));
});
router.post('/removeManagers', async function (req, res, next) {
    res.send(await removeManagers(req.body));
});

module.exports = router;
