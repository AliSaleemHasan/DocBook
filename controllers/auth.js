const { User } = require("../models");

const { logIn, logOut } = require("../auth");

const bcrypt = require("bcrypt");

const { registerSchema, loginSchema, validator } = require("../validation");

module.exports.authCtrl = {
  login: async (req, res) => {
    const { email, password } = req.body;

    validator(loginSchema, { email, password });

    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password, user.password)))
      throw new Error("incorrect email or password");

    logIn(req, user._id, user.accountType);

    res.json({
      message: user,
    });
  },
  signup: ({ createAccount, modelName }) => {
    return async (req, res) => {
      const {
        email,
        password,
        password_confirmation,
        full_name,
        fields,
      } = req.body;

      validator(registerSchema, {
        email,
        password,
        password_confirmation,
        full_name,
      });

      let user = await User.findOne({ email });

      if (user) throw new Error("already exist email");

      const hashed = await bcrypt.hash(password, 10);

      user = await new User({
        email: email,
        password: hashed,
        accountType: modelName,
        accountId: await createAccount(fields),
      });

      await user.save();

      logIn(req, user._id, user.accountType);

      const link = user.verificationUrl();

      console.log(link);

      res.json({
        user: user,
        userType: user.userType,
      });
    };
  },
  logout: async (req, res) => {
    await logOut(req, res);
    res.json({ status: "logged out" });
  },
};
