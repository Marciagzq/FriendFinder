var path = require('path');

//GET API FRIENDS
app.get("/api/friends", function(req, res) {
    res.json(friends);
});

//Post API 
app.post("/api/friends", function(req,res) {
 var userInp = req.body;
});