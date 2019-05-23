const cheerio = require('cheerio');
const phantom = require('phantom');

module.exports = async function (nickname) {
  QueryUrlBuilder = (query) => (`https://tmi.nexon.com/kart/user?nick=${encodeURI(query)}`);
  const url = QueryUrlBuilder(nickname);

  const instance = await phantom.create();
  const page = await instance.createPage();

  const status = await page.open(url);
  const $ = cheerio.load(await page.property('content'));

  let stat = []
  const names = ['빠름', '매우빠름', '무한부스터']
  $('div.stats').find('div.speed').each(function(idx, _) {
    // console.log($.html(elem))
    stat.push({
      name: names[idx],
      summary: $(this).find('.summary').text().trim()
    })
  });

  await instance.exit();
  return stat;
}
