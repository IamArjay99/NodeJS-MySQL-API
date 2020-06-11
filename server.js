const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// PORT
const PORT = process.env.PORT || 3000;

// IMPORT

const usersController = require("./controller/usersController");

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

app.use("/users", usersController);
