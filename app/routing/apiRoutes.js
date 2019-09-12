var friends = require("../data/friends.js");

//GET API FRIENDS
module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    res.json(friends);
});

//Post API 
app.post("/api/friends", function(req,res) {
 var userInp = req.body;

 var bestMatch = {};
 var bestScore = 50;

 for(var i = 0; i < friends.length; i++) {
    var currentFriend = friends[i];
    var currentScore = 0;
    
    for(var j = 0; j < userInp.scores.length; j++) {
     currentScore += Math.abs(userInp.scores[j] - currentFriend.scores[j]);
    };

    if(currentScore < bestScore) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
    }
 };

 friends.push(userInp);

res.json(bestMatch);
});

}