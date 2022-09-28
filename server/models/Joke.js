const mongoose = require('mongoose');

//defines schema for db storage
//unique id's are attached
const JokeSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    ageGroup: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
    },
    punchline: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Joke', JokeSchema);