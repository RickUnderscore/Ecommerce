const { default: mongoose } = require("mongoose");

/*              MongoDB Server setup
    Create a folder named mongodb inside your Project folder, 
    and create a subfolder under it named data.

    Open a bash terminal in the mongodb folder and then 
    start the MongoDB server by typing the following at the prompt 
            
                mongodb --dbpath=data
*/
const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MOGODB_URL); //add your local database - mongodb://localhost:27017
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database Error");
    }
};
module.exports = dbConnect;