const router = require("express").Router();
const apiRoutes = require("./apiRoutes/noteRoutes");

router.use(apiRoutes);

module.exports = router;