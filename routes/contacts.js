const express = require("express");
const router = express.Router();

// @route     GET   api/contacts
// @desc      Get all users contacts
// @acces     Private
router.post("/", (req, res) => {
  res.send("Get all contacts");
});

// @route     POST   api/contacts
// @desc      add new contact
// @acces     Private
router.post("/", (req, res) => {
  res.send("add contact");
});

// @route     PUT   api/contacts/:id
// @desc      Update contact
// @acces     Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route     DELETE   api/contacts/:id
// @desc      Delete contact
// @acces     Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});
module.exports = router;
