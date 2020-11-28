let search = process.argv.slice(2)[0];
if (typeof search === 'undefined') {search = '';}

const sites = [
    "https://www.hepsiburada.com/ara?q=%s",
    "https://www.n11.com/arama?q=%s",
    "https://www.trendyol.com/tum--urunler?q=%s",
    "https://www.amazon.com.tr/s?k=%s",
    "https://www.pttavm.com/arama?q=%s",
    "https://www.gittigidiyor.com/arama/?k=%s",
    "https://www.morhipo.com/arama?q=%s",
    "https://www.webdenal.com/arama.jsp?mysearch_id=&mysearch=%s",
    "https://www.itopya.com/arama/?a=%s",
    "https://www.teknostore.com/catalogsearch/result/?q=%s",
    "https://www.vatanbilgisayar.com/arama/%s/",
    "https://www.teknosa.com/arama/?s=%s",
    "https://www.mediamarkt.com.tr/tr/search.html?query=%s",
    "https://www.e-bebek.com/search?text=%s",
    "https://www.migros.com.tr/arama?q=%s",
    "https://www.carrefoursa.com/tr/search/?text=%s",
    "https://www.koctas.com.tr/search/?text=%s",

]

const open = require("open");

sites.forEach(element => {
    element = element.split("%s").join(search)
    open(decodeURI(encodeURI(element)))
});

