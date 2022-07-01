const userSchema = require("../models/user");


const putMatches = (req, res) =>{
    const {id} = req.params;
    const {dislike, likeReceived, likeGiven, matches} = req.body

    userSchema
//         .updateOne({_id:id},{ $push: {likeGiven: likeGiven}})
        .updateMany({_id:id},{ $push: {likeGiven: likeGiven}}, {$push:{matches: matches}},{$push:{dislike: dislike}}, {$push:{likeReceived: likeReceived}})
        .then(data => res.json(data))
        .catch((error) => res.json({message:error}));
}

module.exports = {
    putMatches}
