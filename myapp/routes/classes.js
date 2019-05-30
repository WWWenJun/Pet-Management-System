var express = require('express');
var router = express.Router();

const { addClass, getClassesByPage,removeClass,getClasses } = require("../service/classesService");

/* GET home page. */
router.post('/addClass', async function (req, res, next) {
    res.send(await addClass(req.body));
});

router.get('/getClasses', async function (req, res, next) {
    res.send(await getClasses());
});
router.get('/getClassesByPage', async function (req, res, next) {
    res.send(await getClassesByPage(req.query));
});
router.post('/removeClass', async function (req, res, next) {
    res.send(await removeClass(req.body));
});

module.exports = router;
