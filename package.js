Package.describe({
	summary : "Moment with languages"
});

Package.on_use(function(api, where) {
	api.use("underscore");
	
	if (api.export) {
		api.export("moment");
	}

	api.add_files('lib/moment-with-locales.js');
	api.add_files('lib/export-moment.js');
});

Package.on_test(function(api){
	api.use(["moment-with-langs", "tinytest"], ["client", "server"]);
	api.add_files("test/basics.js", ["client", "server"]);
});
