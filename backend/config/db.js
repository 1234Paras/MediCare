import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://parasjaincoding_db_user:sTlTGhb0BOwAaez7@cluster0.mhqtrqz.mongodb.net/MediCare")
    .then(() => {
        console.log("DB CONNECTED")
    })
}