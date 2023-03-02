const router = require("express").Router();

//importing controllers

const {
  createCategory,
  getCategory,
  getCategoryById,
  deleteCategory,
} = require("../controller/categoryController");
const {
  createCandidate,
  getCandidate,
  getCandidateById,
  getCandidateByCategory,
  deleteCandidate,
} = require("../controller/candidateController");
const {
  createVoter,
  getVoter,
  getVoterById,
  deleteVoter,
  updateVoterById,
} = require("../controller/voterController");
const {
  CreateVote,
  DeleteVote,
  GetVote,
} = require("../controller/voteController");

const {
  createParty,
  getParty,
  deletePartyById,
} = require("../controller/partyController");

const { createAdmin } = require("../controller/adminController");

const { login } = require("../../auth/adminLoginController");

const { userLogin } = require("../../auth/userLoginController");

const { adminCheckToken } = require("../../auth/adminTokenValidation");

const { userCheckToken } = require("../../auth/userTokenValidation");

// router for category

router.post("/create-category", createCategory);
router.get("/get-category", getCategory);
router.get("/get-category-by-id/:id", getCategoryById);
router.delete("/delete-category", deleteCategory);

// router for candidate

router.post("/create-candidate", createCandidate);
router.get("/get-candidate", getCandidate);
router.get("/get-candidate-by-id/:id", getCandidateById);
router.get("/get-candidate-by-category/:category", getCandidateByCategory);
router.delete("/delete-candidate", deleteCandidate);

// router for voter

router.post("/create-voter", createVoter);
router.get("/get-voter", adminCheckToken, userCheckToken, getVoter);
router.get("/get-voter-by-id/:id", getVoterById);
router.delete("/delete-voter", deleteVoter);
router.post("/update-voter", updateVoterById);

//router for vote
router.post("/create-vote", CreateVote);
router.delete("/delete-vote", DeleteVote);
router.get("/get-stored-vote", GetVote);

// router for party
router.post("/create-party", createParty);
router.get("/get-party", getParty);
router.delete("/delete-party-by-id", deletePartyById);

// admin
router.post("/create-admin", createAdmin);

//admin login
router.post("/admin-login", login);

//user login
router.post("/user-login", userLogin);

module.exports = router;
