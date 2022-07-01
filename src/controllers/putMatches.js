const userSchema = require("../models/user");


const putMatches = (req, res) =>{
    const {id} = req.body;
    const {dislike, likeReceived, likeGiven, matches} = req.body

    userSchema
        .insertOne({_id:id},{dislike, likeReceived, likeGiven, matches})

        .then(data => res.json(data))
        .catch((error) => res.json({message:error}));
}

module.exports = {
    putMatches
};