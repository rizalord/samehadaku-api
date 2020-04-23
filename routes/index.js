const MainController = require("./../controller/MainController");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", MainController.home);
router.get("/page/:page", MainController.home);
router.get("/blog/", MainController.blog);
router.get("/blog/read/:id", MainController.readblog);
router.get("/blog/:page", MainController.blog);

module.exports = router;
