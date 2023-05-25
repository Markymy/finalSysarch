const collection = require("./mongo");
const mongoose = require("mongoose");


async function printAllData() {
  try {
    const data = await collection.find();
    console.log(data);
  } catch (error) {
    console.error("Error retrieving data from MongoDB:", error);
  } finally {
    // Close the MongoDB connection after printing the data
    mongoose.connection.close();
  }
}

// Connect to MongoDB and print all data
mongoose.connect("mongodb+srv://ciednermabale:09205166719W!cked@cluster0.5lga3fu.mongodb.net/users")
  .then(() => {
    console.log("MongoDB connected");
    printAllData();
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });
