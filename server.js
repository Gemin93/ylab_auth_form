const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.options("/", (req, res) => {
  res.send();
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(`Email: ${email}, Password: ${password}`);
  res.json({ message: "Successful login" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
