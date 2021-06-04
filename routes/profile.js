const router = require("express").Router();

const { getProfileInfo } = require("../controllers");
const { authnecated } = require("../middlewares");

router.route("/").get(authnecated, getProfileInfo);

module.exports.profile = router;
