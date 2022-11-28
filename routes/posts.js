const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.put("/placeOrder", postsController.placeOrder);

router.post("/completeOrder", postsController.completeOrder);

router.delete("/deleteCompletedOrder/:id", postsController.deleteCompletedOrder);

module.exports = router;