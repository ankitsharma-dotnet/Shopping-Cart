const mongoose = require('mongoose')

const connectDb = async() =>{
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/shopping_cart'
    
    if (!process.env.MONGO_URI) {
        console.warn("WARNING: MONGO_URI is not defined in .env. Falling back to localhost.");
    }

    try{
        await mongoose.connect(uri)
        console.log("Database connected.")
    }catch(error){
        console.error("Database connection failed:", error.message)
        console.log("Tip: Ensure your .env file is set up and contains a valid MONGO_URI.")
    }
}

module.exports = connectDb