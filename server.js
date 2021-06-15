const express = require("express");
const app = express();
const kahootSpammer = require("kahoot-spammer");

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./public/views");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/spam", botSpam);

app.post("/spam", botSpam);

function botSpam(req, res) {
  const api = kahootSpammer;
  let { name, pin, amount } = req.query;

  api
    .spam(parseInt(pin), name, parseInt(amount))
    .then(() => res.json({ success: true }))
    .catch((e) => res.json({ ...e, success: false }));
}

app.listen(5000, () => console.log("http://localhost:5000"));
