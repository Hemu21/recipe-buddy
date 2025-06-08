const express = require("express");
const recipesRouter = require("./routes/recipes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/recipes", recipesRouter);

app.get("/", (req, res) => {
  res.json({ message: "Recipe API running" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
