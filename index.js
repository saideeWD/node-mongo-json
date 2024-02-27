const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const users = [
  "Saidee",
  "Masud",
  "Zakir",
  "Rokib",
  "Misty",
  "Thaniya",
  "auuler",
  "nyeak",
  "Kola khabo",
];

// get

app.get("/", (req, res) => {
  const frouit = {
    product: "ada",
    price: 2000,
  };
  res.send(frouit);
});

app.get("/banana/khabo", (req, res) => {
  const kola = {
    product: "ko ka kola",
    price: "200",
  };
  res.send(kola);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.query.sort);
  const name = users[id];
  res.send({ id, name });
});

//post
app.post("/addUser", (req, res) => {
  //Save to database
  const user = req.body;
  user.id = 55;
  res.send(user);
});

app.listen(4000, () => console.log("Listing port ami onekto 3000"));
