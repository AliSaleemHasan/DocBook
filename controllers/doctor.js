const { Doctor } = require("../models");

const modelName = "Doctor";

module.exports.doctorCtrl = {
  createAccount,
  modelName,
  update,
};

async function createAccount(fields) {
  const doctorDoc = await new Doctor(fields);
  await doctorDoc.save();
  return doctorDoc._id;
}

async function update(req, res) {
  const doctorDoc = await Patient.findOneAndUpdate(
    req.parm.accid,
    req.body.fields
  );
  doctorDoc.save();
}

exports.getDoctorInfo = async (req, res, next) => {
  const account = await Doctor.findById(req.params.doctorid);
  if (!account) next();
  else res.json({ info: account });
};
