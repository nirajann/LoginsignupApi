const express = require("express");
const { verify } = require("jsonwebtoken");
const {
  updateUser,
  deleteUser,
  getUser,
    getUsers,

} = require("../controller/manage");
const { verifyAdmin, verifyUser } = require("../middleware/auth");
const router = express.Router();

//update
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/", getUsers);

module.exports = router;
