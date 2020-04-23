var scraperjs = require("scraperjs");

class MainController {
  constructor() {}

  /**
   * PATH = '/'
   */
  home = (req, res) => {
    var page =
      typeof req.params.page == "undefined"
        ? ""
        : req.params.page == "1"
        ? ""
        : `page/${req.params.page.toString()}/`;
    scraperjs.StaticScraper.create(`https://samehadaku.vip/${page}`).scrape(
      function ($) {
        var obj = {};
        obj.season = $(".animposx")
          .map(function () {
            return {
              title: $(this).find(".data .title").text(),
              status: $(this).find(".data .type").text(),
              link: $(this).find("a").attr("href"),
              linkId: $(this)
                .find("a")
                .attr("href")
                .replace("https://samehadaku.vip/anime/", "")
                .replace("/", ""),
              image: $(this).find("a .content-thumb img").attr("src"),
              rating: $(this).find("a .content-thumb .score").text().trim(),
            };
          })
          .get();

        obj.latest = $(".post-show ul li")
          .map(function () {
            return {
              title: $(this).find(".dtla .entry-title a").text(),
              episode: $(this).find(".dtla span:first-of-type author").text(),
              postedBy: $(this).find(".dtla span:nth-of-type(2) author").text(),
              release_time: $(this)
                .find(".dtla span:last-of-type")
                .text()
                .replace(" Released on: ", ""),
              link: $(this).find(".dtla .entry-title a").attr("href"),
              image: $(this).find(".thumb a img").attr("src"),
            };
          })
          .get();

        res.send(obj);
      }
    );
  };

  about = (req, res) => {
    var page =
      typeof req.params.page == "undefined"
        ? ""
        : req.params.page == "1"
        ? ""
        : `page/${req.params.page.toString()}/`;
    scraperjs.StaticScraper.create(`https://samehadaku.vip/blog/${page}`).scrape(
      function ($) {
        var blog = {};git
        blog.blog = $(".box-blog")
          .map(function () {
            return {
              title: $(this).find("h2 a").text(),
              sub: $(this).find(".exp p").text(),
              date: $(this).find(".auth i").text(),
              link: $(this).find(".img a").attr("href"),
            };
          })
          .get();

        res.send(blog);
      }
    );
  };
}

module.exports = new MainController();
