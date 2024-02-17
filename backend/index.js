// const express = require("express");
// const cors = require("cors");
// require("dotenv/config");
// const mongoose = require("mongoose");

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors(
//   {
//     origin: "https://motion-canvas-frontend.vercel.app",
//     methods: ["POST", "GET"],
//     credentials: true
//  }
// ));
// app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello to Fitness Tracker API");
// });

// mongoose.connect('mongodb+srv://Sudip:Sudip12345@motioncanvas.gaypobr.mongodb.net/?retryWrites=true&w=majority')
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error("Error:",err);
//   });

// const exercisesRouter = require("./routes/exercises");
// const usersRouter = require("./routes/users");

// app.use("/exercises", exercisesRouter);
// app.use("/users", usersRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

const express = require("express");
const cors = require("cors");
require("dotenv/config");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: "https://motion-canvas-frontend.vercel.app",
  methods: ["POST", "GET"],
  credentials: true
}));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello to Fitness Tracker API");
});

mongoose.connect('mongodb+srv://Sudip:password@motioncanvas.gaypobr.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error("Error:", err);
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

