(function() {
    const fullUrl = /([\w-]+)\.starfishsolutions\.com\/([\w-]+)\/(\w+)\/serviceCatalog\.html(\?[\w\d=]+)?#\/(\w+)\/(\d+)/;

    const matcher = fullUrl.exec(document.URL) || fullUrl.exec(document.URL);

    if(matcher && matcher.length === 7) {
        
        const domain = matcher[1];
        const instance = matcher[2];
        const view = matcher[3];
        const type = matcher[5];
        const id = matcher[6];

        const url = `https://${domain}.starfishsolutions.com/${instance}/dl/${view}/serviceCatalog.html?bookmark=${type}/${id}`;
        alert(url);
    }
})();

/*Copy and Paste Line below for bookmark:

javascript:(function(){const fullUrl=/([\w-]+)\.starfishsolutions\.com\/([\w-]+)\/(\w+)\/serviceCatalog\.html(\?[\w\d=]+)?#\/(\w+)\/(\d+)/;const matcher=fullUrl.exec(document.URL)||fullUrl.exec(document.URL);if(matcher&&matcher.length===7){const domain=matcher[1];const instance=matcher[2];const view=matcher[3];const type=matcher[5];const id=matcher[6];const url=`https://${domain}.starfishsolutions.com/${instance}/dl/${view}/serviceCatalog.html?bookmark=${type}/${id}`;alert(url)}})()

*/