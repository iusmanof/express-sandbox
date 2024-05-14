const postgresql = require("../database");

const shopController = {
  getAll: async (req, res) => {
    try {
      const { rows } = await postgresql.query("select * from shop");
      res.json({ msg: "OK", data: rows });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  getById: async (req, res) => {
    try {
      const { rows } = await postgresql.query(
        "select * from shop where shop_id = $1",
        [req.params.id]
      );

      if (rows[0]) {
        return res.json({ msg: "OK", data: rows });
      }

      res.status(404).json({ msg: "not found" });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  create: async (req, res) => {
    try {
      const { name, street } = req.body;

      const sql = "INSERT INTO shop(name, street) VALUES($1, $2) RETURNING *";

      const { rows } = await postgresql.query(sql, [name, street]);

      res.json({ msg: "OK", data: rows[0] });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  updateById: async (req, res) => {
    try {
      const { name, street } = req.body;

      const sql =
        "UPDATE shop set name = $1, street = $2 where shop_id = $3 RETURNING *";

      const { rows } = await postgresql.query(sql, [name, street, req.params.id]);

      res.json({ msg: "OK", data: rows[0] });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  deleteById: async (req, res) => {
    try {
      const sql = "DELETE FROM shop where shop_id = $1 RETURNING *";

      const { rows } = await postgresql.query(sql, [req.params.id]);

      if (rows[0]) {
        return res.json({ msg: "OK", data: rows[0] });
      }

      return res.status(404).json({ msg: "not found" });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
};

module.exports = shopController;
