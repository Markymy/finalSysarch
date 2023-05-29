const express = require('express');
const mongoose = require('mongoose');
const collection = require('./mongo');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const uri = 'mongodb+srv://ciednermabale:09205166719W!cked@cluster0.5lga3fu.mongodb.net/users';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
app.delete('/users', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('users');
    const collection = database.collection('collections');

    // Delete all documents in the collection
    const result = await collection.deleteMany({});
    console.log(`${result.deletedCount} document(s) deleted`);

    res.status(200).send('All users deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while deleting all users');
  } finally {
    await client.close();
  }
});

deleteDocument();

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