const pool = require("../../config/database");

module.exports = {
  createCategory: (data, callBack = () => {}) => {
    pool.query(
      `INSERT INTO Category (name) VALUES(?)`,
      [data.name],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getCategoryById: (id, callBack = () => {}) => {
    pool.query(
      `SELECT * FROM category WHERE c_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getCategory: (callBack = () => {}) => {
    pool.query(`SELECT * FROM category`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  deleteCategory: (data, callBack) => {
    pool.query(
      `DELETE FROM category WHERE c_id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
