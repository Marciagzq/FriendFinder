var path = require("path");

module.exports = function(app) {
    //GET survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});
	//Fallback use route for homepage
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};