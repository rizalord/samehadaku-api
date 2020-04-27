const MainController = require("./../controller/MainController");
const AnimeController = require("./../controller/AnimeController");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", MainController.home);
router.get("/page/:page", MainController.home);
router.get("/blog/", MainController.blog);
router.get("/blog/read/:id", MainController.readblog);
router.get("/blog/:page", MainController.blog);
router.get("/anime/:id", AnimeController.anime);
router.get("/anime/eps/:link", AnimeController.readanime);
router.get("/search/:title", AnimeController.search);
router.get("/search/:title/:page", AnimeController.searchByPage);
router.get("/season/", AnimeController.season);
router.get("/date-release/", AnimeController.date);

module.exports = router;
