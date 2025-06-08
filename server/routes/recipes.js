const express = require("express");
const svc = require("../services/recipeService");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(svc.getAll());
});

router.get("/:id", (req, res) => {
  const recipe = svc.getById(req.params.id);
  recipe
    ? res.json(recipe)
    : res.status(404).json({ error: "Recipe not found" });
});

router.post("/", (req, res) => {
  const created = svc.create(req.body);
  res.status(201).json(created);
});

router.put("/:id", (req, res) => {
  const updated = svc.update(req.params.id, req.body);
  updated
    ? res.json(updated)
    : res.status(404).json({ error: "Recipe not found" });
});

router.delete("/:id", (req, res) => {
  svc.delete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
