const express = require('express');
const mongoose = require('mongoose');
const collection = require('./mongo');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/your_database_name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

app.post('/users/change-password', cors(), async (req, res) => {
  const { password, newPassword } = req.body;

  try {
    const user = await collection.findOne({ email: req.session.email });

    if (!user) {
      res.json({ success: false });
      return;
    }

    // Check if the current password matches
    if (user.password !== password) {
      res.json({ success: false });
      return;
    }

    // Update the password in the user document
    user.password = newPassword;
    await user.save();

    res.json({ success: true });
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ success: false });
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
