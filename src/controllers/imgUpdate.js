const userSchema = require("../models/user");


const userUpdate = (req, res) =>{
    const {id} = req.params;
    const {image} = req.body

    userSchema
        .updateOne({_id:id},{ $push: {image}})

        .then(data => res.json(data))
        .catch((error) => res.json({message:error}));
}

module.exports = {
    userUpdate
};
