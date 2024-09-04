// Dependencies
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.7t0yn.mongodb.net/b460-to-do?retryWrites=true&w=majority");

let db = mongoose.connection; //it allows to handle errors

// Database handlers
db.on("error", console.error.bind(console, "connection error"))
db.once("open", () => console.log("We're connected to the cloud database"));

// Mongoose Schema
// Use the Schema() constructor
// new

const taskSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    // predefined values
    default: "pending"
  }
})

const Task = mongoose.model("Task", taskSchema);

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Creating a Task

app.post("/tasks", (req, res) => {
  // find a duplicate incase before heading to adding task
  Task.findOne({name: req.body.name}).then((result, err) =>{

    if(result != null && result.name == req.body.name){
      return res.send("Duplicate Task found");
    } else {
      let newTask = new Task ({
        name: req.body.name
      });

      newTask.save().then((savedTask, saveErr) => {
        if(saveErr){
          return console.error(saveErr);
        } else {
          return res.send("New Task created!");
        }
      })

    }
  })
})


app.get("/tasks", (req, res) => {

  Task.find({}).then((result, err) => {
    if (err) {
      return console.log(err);
    } else {
      return res.send(result)
    }
  })
});

// Mongoose Schema for User
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Creating a model from the schema
const User = mongoose.model('User', userSchema);

// POST route to search for a task by name
app.post("/search-task", async (req, res) => {
  try {
    let task = await Task.findOne({ name: req.body.name });
    if (task) {
      return res.send(task);
    } else {
      return res.status(404).send("Task not found");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("An error occurred while searching for the task");
  }
});


// Member 3 starts

app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if any of the fields are missing
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).send("All fields must be provided");
    }

    // Check for duplicate user by email
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).send("Duplicate username found");
    }

    // Create a new user and save it to the database
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    await newUser.save();

    return res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error registering user");
  }
});

// Member 3 ends

// Member 4 Starts

app.post("/login", (req, res) => {
  //check if the input is not blank

  if (req.body.email && req.body.password) {
      User.findOne({email : req.body.email}).then((result) => {
          console.log(result);
          if (!result) {
              return res.send("Email does not exist");
          } else if ( result.password === req.body.password ) {
              return res.send("Thank you for logging in");
          } else {
              return res.send("Wrong password");
          }
      }).catch((err) => {
          console.log(err);
          return res.status(500).send("An error occurred");
      });
  } else {
      return res.status(400).send("Please enter a username and password");
  }
});

// Member 4 Ends



if(require.main === module){
  app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = {app, mongoose};