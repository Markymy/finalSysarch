// server.js

const express = require("express");
const mongoose = require("mongoose");
const collection = require("./mongo");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://ciednermabale:09205166719W!cked@cluster0.5lga3fu.mongodb.net/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password, vehicle, plate } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      if (check.password === password) {
        res.json("exist");
      } else {
        res.json("notexist");
      }
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password, vehicle, plate } = req.body;

  const data = {
    email: email,
    password: password,
    vehicle: vehicle,
    plate: plate,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.create(data); // Use create() instead of insertMany()
    }
  } catch (e) {
    res.json("fail");
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
