const db = require("../db/db");
const sql = {
  create: `INSERT INTO recipes (title, ingredients, instructions, tags) VALUES (?, ?, ?, ?)`,
  getAll: `SELECT * FROM recipes ORDER BY created_at DESC`,
  getById: `SELECT * FROM recipes WHERE id = ?`,
  update: `UPDATE recipes SET title=?, ingredients=?, instructions=?, tags=? WHERE id = ?`,
  delete: `DELETE FROM recipes WHERE id = ?`,
};

module.exports = {
  getAll() {
    return db.prepare(sql.getAll).all();
  },
  getById(id) {
    return db.prepare(sql.getById).get(id);
  },
  create(data) {
    const { title, ingredients, instructions, tags } = data;
    const info = db
      .prepare(sql.create)
      .run(title, JSON.stringify(ingredients), instructions, tags);
    return this.getById(info.lastInsertRowid);
  },
  update(id, data) {
    const { title, ingredients, instructions, tags } = data;
    db.prepare(sql.update).run(
      title,
      JSON.stringify(ingredients),
      instructions,
      tags,
      id
    );
    return this.getById(id);
  },
  delete(id) {
    return db.prepare(sql.delete).run(id);
  },
};
