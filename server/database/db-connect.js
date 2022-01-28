import mongoose from 'mongoose'


export const connect = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log('connection successfully')
        return connection
    }catch (e) {
        console.dir(`Error connection: ${e.message}`)
    }
}