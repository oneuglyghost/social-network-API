const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// Default route for handling incorrect routes
router.use((req, res) => {
  return res.status(404).send("Not Found");
});

module.exports = router;