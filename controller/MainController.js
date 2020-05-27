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
      async function ($) {
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
              image: $(this)
                .find("a .content-thumb img")
                .attr("src")
                .replace("quality=80", "quality=100"),
              rating: $(this).find("a .content-thumb .score").text().trim(),
            };
          })
          .get()
          .slice(0, 10);

        await Promise.all(
          obj.season.map(async (e, i) => {
            await scraperjs.StaticScraper.create(e.link).scrape(function ($) {
              e.sinopsis = $(".desc .entry-content-single p")
                .map(function () {
                  return $(this).text();
                })
                .get()[0];
              e.genre = $(".genre-info a")
                .map(function () {
                  return $(this).text();
                })
                .get();
              return e;
            });
            return true;
          })
        );

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
              image: $(this)
                .find(".thumb a img")
                .attr("src")
                .replace("quality=80", "quality=100"),
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
      data.image_cover = $(".thumb-blog")
        .map(function () {
          return $(this).find("img").attr("src");
        })
        .get()[0];
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

  tag(req, res) {
    const { tag } = req.params;
    const page = `https://samehadaku.vip/tag/${tag}`;

    scraperjs.StaticScraper.create(page).scrape(function ($) {
      let data = {};
      data.tag = $("h1.page-title").map(function () {
        return $(this).text().replace("Tag: ", "");
      })[0];
      data.results = $(".site-main .animpost")
        .map(function () {
          return {
            title: $(this).find(".animepost .stooltip .title h4").text(),
            // score: $(this).find(".animepost .stooltip .skor").text().trim(),
            view: $(this)
              .find(".animepost .stooltip .metadata span:last-of-type")
              .text()
              .replace(" Dilihat", ""),
            image: $(this).find(".animepost .animposx img").attr("src"),
            sinopsis: $(this).find(".animepost .stooltip .ttls").text().trim(),
            // genres: $(this)
            //   .find(".animepost .stooltip .genres .mta a")
            //   .map(function () {
            //     return $(this).text();
            //   })
            //   .get(),
            status: $(this)
              .find(".animepost .animposx a .data .type")
              .text()
              .trim(),
            link: $(this).find(".animepost .animposx a").attr("href"),
            linkId: $(this)
              .find(".animepost .animposx a")
              .attr("href")
              .replace("https://samehadaku.vip/anime/", "")
              .replace("/", ""),
          };
        })
        .get();

      res.send(data);
    });
  }

  blogcategory(req, res) {
    const { category } = req.params;
    const page = `https://samehadaku.vip/blog-category/${category}`;

    scraperjs.StaticScraper.create(page).scrape(function ($) {
      let data = {};
      data.category = $("h1.page-title").map(function () {
        return $(this).text().replace("Blog Category: ", "");
      })[0];
      data.results = $(".box-blog")
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

      res.send(data);
    });
  }

  blogcategoryByPage(req, res) {
    const { category, page } = req.params;
    const pager = `https://samehadaku.vip/blog-category/${category}/page/${page}`;

    scraperjs.StaticScraper.create(pager).scrape(function ($) {
      let data = {};
      data.category = $("h1.page-title").map(function () {
        return $(this).text().replace("Blog Category: ", "");
      })[0];
      data.results = $(".box-blog")
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

      res.send(data);
    });
  }
}

module.exports = new MainController();
