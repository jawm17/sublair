const path = require("path");
const router = require("express").Router();
const userRouter = require("./User.js");
const adminRouter = require("./Admin.js");
const itemRouter = require("./Item.js");

// API Routes
router.use("/User", userRouter);
router.use("/admin", adminRouter);
router.use("/item", itemRouter);

// If no API routes are hit, send the React app
router.use('*',function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;