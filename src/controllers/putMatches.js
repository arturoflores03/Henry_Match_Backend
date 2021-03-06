const userSchema = require("../models/user");


const putMatches = (req, res) =>{
    const {id} = req.params;
    const {dislike, likeReceived, likeGiven, matches, dislikeReceived} = req.body

    userSchema
         .updateOne({_id:id},{ $push: {dislike, likeReceived, likeGiven, matches, dislikeReceived}})        
        .then(data => res.json(data))
        .catch((error) => res.json({message:error}));
}

module.exports = {
    putMatches}
