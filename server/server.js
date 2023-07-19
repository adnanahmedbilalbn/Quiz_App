const express = require('express');
const app = express();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");




const Schema = mongoose.Schema;

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect('mongodb://127.0.0.1:27017/quizUsersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;


db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"))


app.post('/api/signin', (req, res) => {
  const { userName, password } = req.body;

    try {
     
      const user =  db.collection('users').findOne({ userName, password });
  
      if (user) {
        res.status(200).json({ message: 'Sign in successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
        console.log("User Not Found");

      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/api/questions', async(req, res) => {

  try{

  const questions = await db.collection('questions').find({}).toArray();

  if (questions) {
    //  console.log(questions)
    res.status(200).json({ message: 'Questions Fetched!', questions});
  } 
  else {
    res.status(401).json({ message: 'Not Fetched' });
    console.log("Unable to Fetch data from Collection");
  }

} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
}

});

app.listen(5000, () => {
  console.log('Backend server is running on port 5000');
});


