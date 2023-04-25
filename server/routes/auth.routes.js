const express = require("express");
const router = express.Router({mergeParams: true});

router.post("/signUp", async (req, res) => {
	res.json({
		success: true,
	});
});
router.post("/signInWithPassword", async (req, res) => {});
router.post("/token", async (req, res) => {});

module.exports = router;
