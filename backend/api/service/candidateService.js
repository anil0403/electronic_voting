const pool = require("../../config/database");

module.exports = {
  createCandidate: (data, callBack = () => {}) => {
    pool.query(
      `INSERT INTO Candidate (name, address, citizenshipid, dob, c_id, p_id, candidate_address)
      VALUES(?,?,?,?,?,?,?)`,
      [
        data.name,
        data.address,
        data.citizenshipid,
        data.dob,
        data.c_id,
        data.p_id,
        data.candidate_address
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getCandidateById: (id, callBack = () => {}) => {
    pool.query(
      `SELECT * FROM candidate WHERE ca_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getCandidateByCategory: (data, callBack = () => {}) => {
    pool.query(
      `SELECT * FROM candidate WHERE c_id = ?`,
      [data.category],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getCandidate: (callBack = () => {}) => {
    pool.query(`SELECT * FROM candidate`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  deleteCandidate: (data, callBack) => {
    pool.query(
      `DELETE FROM candidate WHERE ca_id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
