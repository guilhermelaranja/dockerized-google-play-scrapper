var gplay = require('./node_modules/google-play-scraper');

for (let i=0; i<20; i++) {
	gplay.reviews({
		appId: 'com.nianticlabs.pokemongo',
		lang: 'en-us',
		page: i,
		sort: gplay.sort.NEWEST,
		throttle: 10
	}).then(console.log, console.log);
}

