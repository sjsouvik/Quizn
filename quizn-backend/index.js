const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const quizRoutes = require("./routes/quiz");

app.use("/v1", quizRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to API of Quick Quiz ");
});

app.use((req, res) => {
  res.status(404).json({ message: "NOT Found this route on server" });
});

app.use((req, res, next, error) => {
  res
    .status(500)
    .json({ message: "Error Occured", errorMessage: error.message });
});

const connectionString =
  "mongodb://testuser:test123@ccplus2020-shard-00-00.liii8.mongodb.net:27017,ccplus2020-shard-00-01.liii8.mongodb.net:27017,ccplus2020-shard-00-02.liii8.mongodb.net:27017/videoLibrary?ssl=true&replicaSet=CCPlus2020-shard-0&authSource=admin&retryWrites=true&w=majority";
// process.env.DB_CONNECTION_STRING;

mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log("Couldn't connect to DB", error));

const port = 8080;
app.listen(port, () => console.log(`App is running at port ${port}`));
