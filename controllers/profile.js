const { User } = require("../models");

exports.getProfileInfo = async (req, res, next) => {
  const user = await User.findById(req.session.userId)
    .populate("accountId")
    .exec();

  if (!user) next();
  else res.json({ info: user });
};
