import mongoose from 'mongoose'

async function connection(){
    try {
        await mongoose.connect("mongodb://localhost:27017/charan-paduka");
        console.log("Connected to the db");
    } catch (err) {
        console.error("Failed to connect to the db", err);
    }
}

export default connection;