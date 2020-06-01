var scraperjs = require("scraperjs");
var zsExtract = require("zs-extract");

class AnimeController {
  anime(req, res) {
    const { id } = req.params;
    const page = `https://samehadaku.vip/anime/${id}/`;
    scraperjs.StaticScraper.create(page).scrape(async function ($) {
      var data = {};
      //   Title
      data.title = $(".infox h1")
        .map(function () {
          return $(this).text();
        })
        .get()[0];
      // Sinopsis
      data.sinopsis = $(".entry-content.entry-content-single p")
        .map(function () {
          return $(this).text();
        })
        .get()[0];
      // Image
      data.image = $(".thumb img")
        .map(function () {
          return $(this).attr("src").replace("quality=80", "quality=100");
        })
        .get()[0];
      // Genres
      data.genre = $(".genre-info a")
        .map(function () {
          return {
            text: $(this).text(),
            link: $(this).attr("href"),
          };
        })
        .get();
      // Rating Value
      data.ratingValue = $("[itemprop=ratingValue]")
        .map(function () {
          return $(this).text();
        })
        .get()[0];
      // Rating Count
      data.ratingCount = $("[itemprop=ratingCount]")
        .map(function () {
          return $(this).text();
        })
        .get()[0];
      // Detail
      data.detail = {};
      var tmp;
      tmp = $(".spe span:nth-of-type(1)")
        .map(function () {
          var text = $(this).text().split(" ");
          var first =
            text[0] == "Total" ? (text[0] + text[1]).replace(" ", "") : text[0];

          if (text[0] == "Total") {
            text.shift();
            text.shift();
          } else {
            text.shift();
          }

          text = text.join(" ");
          return [first, text];
        })
        .get();
      data.detail[tmp[0]] = tmp[1];

      tmp = $(".spe span:nth-of-type(3)")
        .map(function () {
          var text = $(this).text().split(" ");
          var first =
            text[0] == "Total" ? (text[0] + text[1]).replace(" ", "") : text[0];

          if (text[0] == "Total") {
            text.shift();
            text.shift();
          } else {
            text.shift();
          }

          text = text.join(" ");
          return [first, text];
        })
        .get();
      data.detail[tmp[0]] = tmp[1];

      tmp = $(".spe span:nth-of-type(5)")
        .map(function () {
          var text = $(this).text().split(" ");
          var first =
            text[0] == "Total" ? (text[0] + text[1]).replace(" ", "") : text[0];

          if (text[0] == "Total") {
            text.shift();
            text.shift();
          } else {
            text.shift();
          }

          text = text.join(" ");
          return [first, text];
        })
        .get();
      data.detail[tmp[0]] = tmp[1];

      tmp = $(".spe span:nth-of-type(7)")
        .map(function () {
          var text = $(this).text().split(" ");
          var first =
            text[0] == "Total" ? (text[0] + text[1]).replace(" ", "") : text[0];

          if (text[0] == "Total") {
            text.shift();
            text.shift();
          } else {
            text.shift();
          }

          text = text.join(" ");
          return [first, text];
        })
        .get();
      data.detail[tmp[0]] = tmp[1];

      tmp = $(".spe span:nth-of-type(9)")
        .map(function () {
          var text = $(this).text().split(" ");
          var first =
            text[0] == "Total" ? (text[0] + text[1]).replace(" ", "") : text[0];

          if (text[0] == "Total") {
            text.shift();
            text.shift();
          } else {
            text.shift();
          }

          text = text.join(" ");
          return [first, text];
        })
        .get();
      data.detail[tmp[0]] = tmp[1];

      tmp = $(".spe span:nth-of-type(11)")
        .map(function () {
          var text = $(this).text().split(" ");
          var first =
            text[0] == "Total" ? (text[0] + text[1]).replace(" ", "") : text[0];

          if (text[0] == "Total") {
            text.shift();
            text.shift();
          } else {
            text.shift();
          }

          text = text.join(" ");
          return [first, text];
        })
        .get();
      data.detail[tmp[0]] = tmp[1];

      tmp = $(".spe span:nth-of-type(2)")
        .map(function () {
          var text = $(this).text().split(" ");
          var first =
            text[0] == "Total" ? (text[0] + text[1]).replace(" ", "") : text[0];

          if (text[0] == "Total") {
            text.shift();
            text.shift();
          } else {
            text.shift();
          }

          text = text.join(" ");
          return [first, text];
        })
        .get();
      data.detail[tmp[0]] = tmp[1];

      tmp = $(".spe span:nth-of-type(4)")
        .map(function () {
          var text = $(this).text().split(" ");
          var first =
            text[0] == "Total" ? (text[0] + text[1]).replace(" ", "") : text[0];

          if (text[0] == "Total") {
            text.shift();
            text.shift();
          } else {
            text.shift();
          }

          text = text.join(" ");
          return [first, text];
        })
        .get();
      data.detail[tmp[0]] = tmp[1];

      tmp = $(".spe span:nth-of-type(6)")
        .map(function () {
          var text = $(this).text().split(" ");
          var first =
            text[0] == "Total" ? (text[0] + text[1]).replace(" ", "") : text[0];

          if (text[0] == "Total") {
            text.shift();
            text.shift();
          } else {
            text.shift();
          }

          text = text.join(" ");
          return [first, text];
        })
        .get();
      data.detail[tmp[0]] = tmp[1];

      tmp = $(".spe span:nth-of-type(8)")
        .map(function () {
          var text = $(this).text().split(" ");
          var first =
            text[0] == "Total" ? (text[0] + text[1]).replace(" ", "") : text[0];

          if (text[0] == "Total") {
            text.shift();
            text.shift();
          } else {
            text.shift();
          }

          text = text.join(" ");
          return [first, text];
        })
        .get();
      data.detail[tmp[0]] = tmp[1];

      tmp = $(".spe span:nth-of-type(10)")
        .map(function () {
          var text = $(this).text().split(" ");
          var first =
            text[0] == "Total" ? (text[0] + text[1]).replace(" ", "") : text[0];

          if (text[0] == "Total") {
            text.shift();
            text.shift();
          } else {
            text.shift();
          }

          text = text.join(" ");
          return [first, text];
        })
        .get();
      data.detail[tmp[0]] = tmp[1];

      tmp = $(".spe span:nth-of-type(12)")
        .map(function () {
          var text = $(this).text().split(" ");
          var first =
            text[0] == "Total" ? (text[0] + text[1]).replace(" ", "") : text[0];

          if (text[0] == "Total") {
            text.shift();
            text.shift();
          } else {
            text.shift();
          }

          text = text.join(" ");
          return [first, text];
        })
        .get();
      data.detail[tmp[0]] = tmp[1];

      // Youtube Trailer
      data.youtube = $("iframe")
        .map(function () {
          return {
            link: $(this).attr("src"),
            id: $(this)
              .attr("src")
              .replace("https://www.youtube.com/embed/", "")
              .trim(),
          };
        })
        .get()[0];
      data.list_episode = $(".lstepsiode.listeps ul li")
        .map(function () {
          return {
            episode: $(this).find(".epsright .eps a").text(),
            title: $(this).find(".epsleft .lchx a").text(),
            date_uploaded: $(this).find(".epsleft .date").text(),
            link: $(this).find(".epsright .eps a").attr("href"),
            id: $(this)
              .find(".epsright .eps a")
              .attr("href")
              .replace("https://samehadaku.vip/", ""),
          };
        })
        .get();

      // get recommend anime
      await scraperjs.StaticScraper.create(
        data.list_episode[data.list_episode.length - 1].link
      ).scrape(async function ($) {
        data.recommend = await Promise.all(
          $(".animposx")
            .map(async function () {
              let data = {
                link: $(this).find("a").attr("href"),
                image: $(this)
                  .find("a img")
                  .attr("src")
                  .replace("quality=80", "quality=100"),
                title: $(this).find("a img").attr("title"),
              };

              await scraperjs.StaticScraper.create(
                $(this).find("a").attr("href")
              ).scrape(function ($) {
                data.genre = $(".genre-info a")
                  .map(function () {
                    return $(this).text();
                  })
                  .get();
              });

              return data;
            })
            .get()
        );
      });

      // get latest episode
      await scraperjs.StaticScraper.create("https://samehadaku.vip/").scrape(
        async function ($) {
          data.latest = await Promise.all(
            $(".post-show ul li")
              .slice(0, 5)
              .map(async function () {
                var data = {
                  title: $(this).find(".dtla .entry-title a").text(),
                  episode: $(this)
                    .find(".dtla span:first-of-type author")
                    .text(),
                  postedBy: $(this)
                    .find(".dtla span:nth-of-type(2) author")
                    .text(),
                  release_time: $(this)
                    .find(".dtla span:last-of-type")
                    .text()
                    .replace(" Released on: ", ""),
                  link: $(this).find(".dtla .entry-title a").attr("href"),
                  image: $(this).find(".thumb a img").attr("src").split("?")[0],
                };

                await scraperjs.StaticScraper.create(
                  $(this).find(".dtla .entry-title a").attr("href")
                ).scrape(function ($) {
                  data.genre = $(".genre-info a")
                    .map(function () {
                      return $(this).text();
                    })
                    .get();
                });

                return data;
              })
              .get()
          );
        }
      );

      res.send(data);
    });
  }

  async readanime(req, res) {
    const { link } = req.params;
    const page = `https://samehadaku.vip/${link}/`;

    scraperjs.StaticScraper.create(page).scrape(async function ($) {
      var data = {};
      data.title = $("h1.entry-title")
        .map(function () {
          return $(this).text();
        })
        .get()[0];
      data.eps = $("span[itemprop=episodeNumber]")
        .map(function () {
          return $(this).text();
        })
        .get()[0];
      data.uploader = $("span.year")
        .map(function () {
          return $(this).text().replace("Diposting oleh ", "").split(" - ")[0];
        })
        .get()[0];
      data.date_uploaded = $("span.year")
        .map(function () {
          return $(this).text().replace("Diposting oleh ", "").split(" - ")[1];
        })
        .get()[0];
      data.detail_anime = {
        title: $(".infoanime .infox h2.entry-title")
          .map(function () {
            return $(this).text();
          })
          .get()[0],
        image: $(".infoanime .thumb img")
          .map(function () {
            return $(this).attr("src").replace("quality=80", "quality=100");
          })
          .get()[0],
        sinopsis: $(".infoanime .infox .desc div")
          .map(function () {
            return $(this).text();
          })
          .get()[0],
        genres: $(".infoanime .infox .genre-info a")
          .map(function () {
            return $(this).text();
          })
          .get(),
      };
      data.downloadEps = $(".download-eps")
        .map(function () {
          return {
            format: $(this).find("p").text(),
            data: $(this)
              .find("ul li")
              .map(function () {
                return {
                  quality: $(this).find("strong").text(),
                  link: {
                    zippyshare: $(this)
                      .find("span:nth-of-type(1) a")
                      .attr("href"),
                    gdrive: $(this).find("span:nth-of-type(2) a").attr("href"),
                    reupload: $(this)
                      .find("span:nth-of-type(3) a")
                      .attr("href"),
                  },
                };
              })
              .get(),
          };
        })
        .get();

      // DIRECT LINK

      // data.downloadEps = await Promise.all(
      //   data.downloadEps.map(async (val) => {
      //     val.data = await Promise.all(
      //       val.data.map(async function (realVal) {
      //         realVal.link.zippyshare = await (await zsExtract.extract( realVal.link.zippyshare )).download
      //         return realVal;
      //       })
      //     );
      //     return val;
      //   })
      // );

      data.recommend = $(".animposx")
        .map(function () {
          let data = {
            link: $(this).find("a").attr("href"),
            image: $(this)
              .find("a img")
              .attr("src")
              .replace("quality=80", "quality=100"),
            title: $(this).find("a img").attr("title"),
          };

          return data;
        })
        .get();

      res.send(data);
    });
  }

  search(req, res) {
    const { title } = req.params;
    const page = `https://samehadaku.vip/?s=${title}`;

    scraperjs.StaticScraper.create(page).scrape(function ($) {
      let data = {};
      data.results = $(".site-main .animpost")
        .map(function () {
          return {
            title: $(this).find(".animepost .stooltip .title h4").text(),
            score: $(this).find(".animepost .stooltip .skor").text().trim(),
            view: $(this)
              .find(".animepost .stooltip .metadata span:last-of-type")
              .text()
              .replace(" Dilihat", ""),
            image: $(this)
              .find(".animepost .animposx img")
              .attr("src")
              .replace("quality=80", "quality=100"),
            sinopsis: $(this).find(".animepost .stooltip .ttls").text().trim(),
            genres: $(this)
              .find(".animepost .stooltip .genres .mta a")
              .map(function () {
                return $(this).text();
              })
              .get(),
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

  searchByPage(req, res) {
    const { title, page } = req.params;
    const pager = `https://samehadaku.vip/page/${page}/?s=${title}`;

    scraperjs.StaticScraper.create(pager).scrape(function ($) {
      let data = {};
      data.results = $(".site-main .animpost")
        .map(function () {
          return {
            title: $(this).find(".animepost .stooltip .title h4").text(),
            score: $(this).find(".animepost .stooltip .skor").text().trim(),
            view: $(this)
              .find(".animepost .stooltip .metadata span:last-of-type")
              .text()
              .replace(" Dilihat", ""),
            image: $(this)
              .find(".animepost .animposx img")
              .attr("src")
              .split("?")[0],
            sinopsis: $(this).find(".animepost .stooltip .ttls").text().trim(),
            genres: $(this)
              .find(".animepost .stooltip .genres .mta a")
              .map(function () {
                return $(this).text();
              })
              .get(),
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

  season(req, res) {
    const page = `https://samehadaku.vip/season/spring-2020/`;

    scraperjs.StaticScraper.create(page)
      .scrape(function ($) {
        var data = {};

        data.title = $(".widget-title h1.page-title")
          .map(function () {
            return $(this).text();
          })
          .get()[0];

        data.results = $(".relat .animpost")
          .map(function () {
            return {
              title: $(this).find(".animepost .stooltip .title h4").text(),
              score: $(this).find(".animepost .stooltip .skor").text().trim(),
              view: $(this)
                .find(".animepost .stooltip .metadata span:last-of-type")
                .text()
                .replace(" Dilihat", ""),
              image: $(this)
                .find(".animepost .animposx img")
                .attr("src")
                .split("?")[0],
              sinopsis: $(this)
                .find(".animepost .stooltip .ttls")
                .text()
                .trim(),
              genres: $(this)
                .find(".animepost .stooltip .genres .mta a")
                .map(function () {
                  return $(this).text();
                })
                .get(),
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

        return data;
      })
      .then(function (data) {
        const page = `https://samehadaku.vip/season/spring-2020/page/2/`;

        scraperjs.StaticScraper.create(page).scrape(function ($) {
          var results = $(".relat .animpost")
            .map(function () {
              return {
                title: $(this).find(".animepost .stooltip .title h4").text(),
                score: $(this).find(".animepost .stooltip .skor").text().trim(),
                view: $(this)
                  .find(".animepost .stooltip .metadata span:last-of-type")
                  .text()
                  .replace(" Dilihat", ""),
                image: $(this)
                  .find(".animepost .animposx img")
                  .attr("src")
                  .replace("quality=80", "quality=100"),
                sinopsis: $(this)
                  .find(".animepost .stooltip .ttls")
                  .text()
                  .trim(),
                genres: $(this)
                  .find(".animepost .stooltip .genres .mta a")
                  .map(function () {
                    return $(this).text();
                  })
                  .get(),
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

          data.results = [...data.results, ...results];

          res.send(data);
        });
      });
  }

  date(req, res) {
    const page = `https://samehadaku.vip/jadwal-rilis/`;

    scraperjs.StaticScraper.create(page).scrape(function ($) {
      var data = {};

      data.title = "Jadwal Rilis";

      var length = $(".schedule .tab-dates")
        .map(function () {
          return $(this).text();
        })
        .get().length;

      var day = $(".schedule .tab-dates")
        .map(function () {
          return $(this).text().trim();
        })
        .get();
      data.results = $(".schedule .result-schedule")
        .map(function (index, element) {
          return {
            day: day[index],
            list: $(this)
              .find(".animepost")
              .map(function () {
                return {
                  title: $(this).find(".animposx a .data .title").text().trim(),
                  image: $(this)
                    .find(".animposx a .content-thumb img")
                    .attr("src")
                    .replace("quality=80", "quality=100"),
                  score: $(this)
                    .find(".animposx a .content-thumb .score")
                    .text()
                    .trim(),
                  genres: $(this)
                    .find(".animposx a .data .type")
                    .text()
                    .trim()
                    .split(", "),
                  link: $(this).find(".animposx a").attr("href"),
                  linkId: $(this)
                    .find(".animposx a")
                    .attr("href")
                    .replace("https://samehadaku.vip/anime/", "")
                    .replace("/", ""),
                };
              })
              .get(),
          };
        })
        .get();

      res.send(data);
    });
  }

  listWithoutPage(req, res) {
    const page = `https://samehadaku.vip/daftar-anime/`;

    scraperjs.StaticScraper.create(page).scrape(function ($) {
      var data = {};

      data.title = "Daftar Anime";

      data.results = $(".site-main .animpost")
        .map(function () {
          return {
            title: $(this).find(".animepost .stooltip .title h4").text(),
            score: $(this).find(".animepost .stooltip .skor").text().trim(),
            view: $(this)
              .find(".animepost .stooltip .metadata span:last-of-type")
              .text()
              .replace(" Dilihat", ""),
            image: $(this)
              .find(".animepost .animposx img")
              .attr("src")
              .replace("quality=80", "quality=100"),
            sinopsis: $(this).find(".animepost .stooltip .ttls").text().trim(),
            genres: $(this)
              .find(".animepost .stooltip .genres .mta a")
              .map(function () {
                return $(this).text();
              })
              .get(),
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

  listWithPage(req, res) {
    const { page } = req.params;
    const inPage = `https://samehadaku.vip/daftar-anime/page/${page}/`;

    scraperjs.StaticScraper.create(inPage).scrape(function ($) {
      var data = {};

      data.title = "Daftar Anime";

      data.results = $(".site-main .animpost")
        .map(function () {
          return {
            title: $(this).find(".animepost .stooltip .title h4").text(),
            score: $(this).find(".animepost .stooltip .skor").text().trim(),
            view: $(this)
              .find(".animepost .stooltip .metadata span:last-of-type")
              .text()
              .replace(" Dilihat", ""),
            image: $(this)
              .find(".animepost .animposx img")
              .attr("src")
              .replace("quality=80", "quality=100"),
            sinopsis: $(this).find(".animepost .stooltip .ttls").text().trim(),
            genres: $(this)
              .find(".animepost .stooltip .genres .mta a")
              .map(function () {
                return $(this).text();
              })
              .get(),
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

  searchByGenre(req, res) {
    const { genre } = req.params;
    const page = `https://samehadaku.vip/genre/${genre}`;

    scraperjs.StaticScraper.create(page).scrape(function ($) {
      let data = {};
      data.genre = $("h1.page-title").map(function () {
        return $(this).text().replace("Genre: ", "");
      })[0];
      data.results = $(".site-main .animpost")
        .map(function () {
          return {
            title: $(this).find(".animepost .stooltip .title h4").text(),
            score: $(this).find(".animepost .stooltip .skor").text().trim(),
            view: $(this)
              .find(".animepost .stooltip .metadata span:last-of-type")
              .text()
              .replace(" Dilihat", ""),
            image: $(this)
              .find(".animepost .animposx img")
              .attr("src")
              .replace("quality=80", "quality=100"),
            sinopsis: $(this).find(".animepost .stooltip .ttls").text().trim(),
            genres: $(this)
              .find(".animepost .stooltip .genres .mta a")
              .map(function () {
                return $(this).text();
              })
              .get(),
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
}

module.exports = new AnimeController();
