const MainController = require('./../controller/MainController');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", MainController.home);
router.get('/page/:page', MainController.home);
router.get("/about/", MainController.about);
router.get("/about/:page", MainController.about);

module.exports = router;
