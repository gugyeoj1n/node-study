const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("BASIC USER GET API");
});

module.exports = router;
