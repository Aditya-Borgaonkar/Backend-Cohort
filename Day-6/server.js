const app = require("./src/app");
const mongoose = require("mongoose");

function connectToMongoDB() {
    mongoose.connect("mongodb+srv://adityaborgaonkar4_db_user:5yXdSm6EcrAP2VCu@cluster0.x0jy9hh.mongodb.net/day-6")
        .then(() => {
            console.log("Connected to Database");
        })
}

connectToMongoDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");

})

