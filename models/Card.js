const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    name: {type: String,
        required: true,
    },
    cost: {type: String,
        required: true,
    },
    type: {type: String,
        required: true,
    },
    craft: {type: String,
        required: true,
    },
    effect: {type: String,
        required: true,
    }
})

module.exports = mongoose.model("card", cardSchema)