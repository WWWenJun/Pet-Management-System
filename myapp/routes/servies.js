var express = require('express');
var router = express.Router();

const { addServies, getServiesByPage,removeServies,getServies ,changeServies} = require("../service/serviesService");

/* GET home page. */
router.post('/addServies', async function (req, res, next) {
    res.send(await addServies(req.body));
});
router.post('/changeServies', async function (req, res, next) {
    res.send(await changeServies(req.body));
});
router.get('/getServies', async function (req, res, next) {
    res.send(await getServies());
});
router.get('/getServiesByPage', async function (req, res, next) {
    res.send(await getServiesByPage(req.query));
});
router.post('/removeServies', async function (req, res, next) {
    res.send(await removeServies(req.body));
});

module.exports = router;
