const mongoose = require('mongoose');
const validator = require('validator');
const uri = "mongodb+srv://aakash_cluster_1:aakash_cluster_1@cluster1.ifsva.mongodb.net/medium_clone?retryWrites=true&w=majority";
/*mongoose.connect('mongodb://127.0.0.1:27017/medium_clone');

const db = mongoose.connection;
db.once("open", function () {
  console.log("Connected successfully");
});*/

try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }
