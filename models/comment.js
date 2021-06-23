const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    date: {type: Date, default: Date.now},
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
    }
},{
    usePushEach: true
  });

module.exports = mongoose.model("Comment", commentSchema);