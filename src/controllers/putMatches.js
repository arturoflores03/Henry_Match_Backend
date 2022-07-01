const userSchema = require("../models/user");


const putMatches = (req, res) =>{
    const {id} = req.params;
    const {dislike, likeReceived, likeGiven, matches} = req.body

    userSchema
        .findOneAndUpdate({_id:id},{$push: {dislike: dislike}}, {$push:{likeReceived: likeReceived}}, {$push:{likeGiven: likeGiven}}, {$push:{matches: matches}})

        .then(data => res.json(data))
        .catch((error) => res.json({message:error}));
}

module.exports = {
    putMatches
};
