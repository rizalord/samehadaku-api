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
          .get().slice(0 , 10);

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

  blog = (req, res) => {
    var page =
      typeof req.params.page == "undefined"
        ? ""
        : req.params.page == "1"
        ? ""
        : `page/${req.params.page.toString()}/`;
    scraperjs.StaticScraper.create(
      `https://samehadaku.vip/blog/${page}`
    ).scrape(function ($) {
      var blog = {};
      blog.blog = $(".box-blog")
        .map(function () {
          return {
            title: $(this).find("h2 a").text(),
            sub: $(this).find(".exp p").text(),
            date: $(this).find(".auth i").text(),
            link: $(this).find(".img a").attr("href"),
            linkId: $(this)
              .find(".img a")
              .attr("href")
              .replace("https://samehadaku.vip/blog/", "")
              .replace("/", "")
              .trim(),
            image: $(this).find(".img a img").attr("src"),
          };
        })
        .get();

      res.send(blog);
    });
  };

  readblog = (req, res) => {
    const id = req.params.id;
    const page = `https://samehadaku.vip/blog/${id}`;

    // REQUEST TO SAMEHADAKU
    scraperjs.StaticScraper.create(page).scrape(function ($) {
      var data = {};
      data.title = $(".sttle h1.entry-title")
        .map(function () {
          return $(this).text();
        })
        .get()[0];
      data.author = $(".author.vcard")
        .map(function () {
          return $(this).find("span").text();
        })
        .get()[0];
      data.date_created = $("span.date")
        .map(function () {
          return $(this).text();
        })
        .get()[0];
      data.image_cover = $(".thumb-blog").map(function(){ return $(this).find('img').attr('src') }).get()[0];
      data.content = $(".entry-content.content-post p")
        .filter(function (e, i) {
          if ($(this).text() == "") {
            data.image_content = $(this).find("img").attr("src");
          }
          return $(this).text() != "";
        })
        .map(function () {
          return {
            text: $(this).text(),
            img: $(this).find("img").attr("src"),
          };
        })
        .get();
      data.tags = $(".post_taxs a")
        .map(function (params) {
          return {
            title: $(this).text(),
            link: $(this).attr("href"),
            active: $(this).attr("class") == "posts_tags" ? false : true,
          };
        })
        .get();

      res.send(data);
    });
  };
}

module.exports = new MainController();
