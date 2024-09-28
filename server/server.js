const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server listening on PORT: ", PORT);
});

app.get("/status", (req, res) => {
  console.log("[get]/status");
  res.json({
    type_of_message: "response /status",
  });
});

app.post("/add_price", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Price added successfully.",
  });
});
