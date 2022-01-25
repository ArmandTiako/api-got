const mongoose = require('mongoose')


exports.connect = async () => {
    try{
        const connection = await mongoose.connect(`mongodb+srv://root:root@cluster0.z7zvz.mongodb.net/books-db?retryWrites=true&w=majority`)
        console.log('connection successfully')
        return connection
    }catch (e) {
        console.log(e)
    }
}