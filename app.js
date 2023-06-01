const express = require('express');
const mongoose = require('mongoose');
const collection = require('./mongo');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.delete("/delete/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const deletedRecord = await collection.findOneAndDelete({ email: email });

    if (!deletedRecord) {
      return res.status(404).send("Record not found");
    }

    res.send(deletedRecord);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/update/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const { newPassword } = req.body;

    const updatedRecord = await collection.findOneAndUpdate(
      { email: email },
      { $set: { password: newPassword } },
      { returnOriginal: false }
    );

    res.send(updatedRecord);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the record.");
  }
});

app.get('/', cors(), (req, res) => {});
app.post('/', async (req, res) => {
  const { email, password, vehicle, plate } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      if (check.password === password) {
        res.json('exist');
      } else {
        res.json('notexist');
      }
    } else {
      res.json('notexist');
    }
  } catch (e) {
    res.json('fail');
  }
});

app.post('/signup', async (req, res) => {
  const { email, password, firstName, lastName, contact, address} = req.body;

  const data = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    contact: contact,
    address: address,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
      await collection.create(data);
    }
  } catch (e) {
    res.json('fail');
  }
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});