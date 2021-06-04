const router = require("express").Router();

const { getDoctorInfo } = require("../controllers");
const { patient } = require("../middlewares");

router.route("/:doctorid").get(patient, getDoctorInfo);

module.exports.doctor = router;
