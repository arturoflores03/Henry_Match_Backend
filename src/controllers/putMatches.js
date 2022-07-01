const userSchema = require("../models/user");


const userPut = (req, res) =>{
    const {id} = req.params;
    const {dislike, likeReceived, likeGiven, matches} = req.body

    userSchema
        .insertOne({_id:id},{ $set: {dislike, likeReceived, likeGiven, matches}})

        .then(data => res.json(data))
        .catch((error) => res.json({message:error}));
}

module.exports = {
    userPut
};