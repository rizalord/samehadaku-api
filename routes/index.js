const MainController = require("./../controller/MainController");
const AnimeController = require("./../controller/AnimeController");
var express = require("express");
var router = express.Router();

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
router.get("/list-anime/", AnimeController.listWithoutPage);
router.get("/list-anime/:page", AnimeController.listWithPage);
router.get("/genre/:genre", AnimeController.searchByGenre);
router.get("/genre/:genre", AnimeController.searchByGenre);
router.get("/tag/:tag", MainController.tag);
router.get("/blog-category/:category", MainController.blogcategory);
router.get("/blog-category/:category/:page", MainController.blogcategoryByPage);

module.exports = router;
