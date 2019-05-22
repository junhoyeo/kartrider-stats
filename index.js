const cheerio = require('cheerio');

module.exports = function (nickname) {
  QueryUrlBuilder = (query) => (`https://tmi.nexon.com/kart/user?nick=${encodeURI(query)}`);
  const url = QueryUrlBuilder(nickname);
  const phantom = require('phantom');

  (async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();

    const status = await page.open(url);
    const $ = cheerio.load(await page.property('content'));

    let stat = []
    $('div.stats').find('div.speed').each(function(idx, _) {
      // console.log($.html(elem))
      stat.push({
        summary: $(this).find('.summary').text().trim()
      })
    });
    console.log(stat)

    await instance.exit();
  })();
}
