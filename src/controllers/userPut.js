const userSchema = require("../models/user");


const userPut = (req, res) =>{
    const {id} = req.params;
    const {name, age, birthday, premium, nickname,role,active, email, image, isAdmin, genderInt, gender, message, review, dislike, description, henryLevel, likeReceived, likeGiven, matches, interests, city, reviews, rating, phone} = req.body

    userSchema
        .updateOne({_id:id},{ $set: {name, age, birthday, premium, nickname,isAdmin, role,active, message, review,  email, image, genderInt, gender, dislike, description, henryLevel, likeReceived, likeGiven, matches, interests, city, reviews, rating, phone}})

        .then(data => res.json(data))
        .catch((error) => res.json({message:error}));
}

module.exports = {
    userPut
};
