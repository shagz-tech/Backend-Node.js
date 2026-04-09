const mongoose=require("mongoose");
async function connectDB(){
    try{
        await mongoose.connect();
        console.log("DB connected successfully");
    }
    catch(error){
        console.log("conection error:",error);
        process.exit(1);

    }
}
connectDB()
