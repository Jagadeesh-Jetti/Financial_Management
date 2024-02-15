const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config({
  path: ".env",
});

const mongoURI = process.env.MONGODB;

console.log(mongoURI);

const dataBase = () => {
  if (!mongoURI) {
    console.error("Environment variable MONGODB not defined!");
  } else {
    mongoose
      .connect(mongoURI)
      .then(() => console.log("Connected to MongoDB"))
      .catch((error) => console.error("Error connecting to MongoDB:", error));

    // Connection Events
    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to db...");
    });

    mongoose.connection.on("error", (err) => {
      console.log(err.message);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose connection is disconnected...");
    });

    process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log(
          "Mongoose connection is disconnected due to app termination..."
        );
        process.exit(0);
      });
    });
  }
};

module.exports = dataBase;
