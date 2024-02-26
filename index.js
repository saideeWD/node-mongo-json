const express = require("express");
const app = express();
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
app.listen(4000, () => console.log("Listing port ami onekto 3000"));
