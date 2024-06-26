import { config } from "./config";

const mongoose = require('mongoose');



const connectDB = async () =>{
    try{
        mongoose.connection.on("connected", () => {
            console.log("Connected to database successfully");
          });
      
          mongoose.connection.on("error", (err: Error) => {
            console.log("Error in connecting to database.", err);
          });
        await   mongoose.connect('mongodb://127.0.0.1:27017/elibxyz');
        
    }
    catch(err){
        console.error("Failed to connect to database.", err);
        process.exit(1);
    }

}
export default connectDB;