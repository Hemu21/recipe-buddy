const express = require("express");
const svc = require("../services/recipeService");
const router = express.Router();

router.get("/", (req, res) => {
  const recipes = svc.getAll().map((recipe) => ({
    ...recipe,
    ingredients: JSON.parse(recipe.ingredients),
    tags: recipe?.tags?.split(",")?.map((tag) => tag?.trim()),
  }));
  recipes
    ? res.json(recipes)
    : res.status(404).json({ error: "No recipes found" });
});

router.get("/:id", (req, res) => {
  const recipe = svc.getById(req.params.id);
  recipe
    ? res.json({
        ...recipe,
        ingredients: JSON.parse(recipe.ingredients),
        tags: recipe?.tags?.split(",")?.map((tag) => tag?.trim()),
      })
    : res.status(404).json({ error: "Recipe not found" });
});

router.post("/", (req, res) => {
  const created = svc.create(req.body);
  res.status(201).json({
    ...created,
    ingredients: JSON.parse(created.ingredients),
    tags: created?.tags?.split(",")?.map((tag) => tag?.trim()),
  });
});

router.put("/:id", (req, res) => {
  const updated = svc.update(req.params.id, req.body);
  updated
    ? res.json({
        ...updated,
        ingredients: JSON.parse(updated.ingredients),
        tags: updated?.tags?.split(",")?.map((tag) => tag?.trim()),
      })
    : res.status(404).json({ error: "Recipe not found" });
});

router.delete("/:id", (req, res) => {
  svc.delete(req.params.id);
  const isAvailable = svc.getById(req.params.id);
  isAvailable
    ? res.status(500).json({ message: "Failed to delete" })
    : res.json({ message: "Deleted successfully" });
});

module.exports = router;
