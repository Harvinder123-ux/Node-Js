import express from "express";
const app = express();
const port = 3003;

app.get("/", (req, res) => {
  res.send("this is home server");
});
app.get("/about", (req, res) => {
  res.send("this is about page");
});
app.get("/contact", (req, res) => {
  res.send("contact");
});

app.listen(port, () => {
  console.log(`App listening at the port ${port}`);
});
