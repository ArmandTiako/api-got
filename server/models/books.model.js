const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    publication_date: {
        type: Date,
        required: true
    },
    numbers_of_page: {
        type: Number,
        required: true
    },
    authors: [
        {
            type: Schema.Types.ObjectId,
            ref: "Authors"
        }
    ]
})

export default mongoose.model('Books', bookSchema)