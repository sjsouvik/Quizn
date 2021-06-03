const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "/.env" });
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const questionRoutes = require("./routes/question");
const quizRoutes = require("./routes/quiz");

app.use("/v1", questionRoutes);
app.use("/v1", quizRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to API of Quizn");
});

app.use((req, res) => {
  res.status(404).json({ message: "NOT Found this route on server" });
});

app.use((req, res, next, error) => {
  res
    .status(500)
    .json({ message: "Error Occured", errorMessage: error.message });
});

const connectionString = process.env.DB_CONNECTION_STRING;

mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log("Couldn't connect to DB", error));

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`App is running at port http://localhost:${port}`)
);
