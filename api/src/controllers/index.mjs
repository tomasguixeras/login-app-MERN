import firebaseAdmin from "../config/firebaseConfig.mjs"
import User from "../models/user.mjs"

export const getUserByMail = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ email })

    if(user){
      return res.status(200).json(user);
    }
  } catch (error) {
    return res.status(500).json({ error: "Server error. Please try again" });
  }
}

export const createUser = async (req, res) => {
  const { email, name, password, image } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({ error: "Invalid request body. Must contain email, password, and name for user." });
  }

  try {
    const newFirebaseUser = await firebaseAdmin.auth.createUser({ email, password });

    if(newFirebaseUser){
      const newUser = new User({
        userId: newFirebaseUser.uid,
        email,
        name,
        image
      });
      newUser.save();

      return res.status(200).json({ success: "Account created successfully. Please sign in." });
    }
  } catch (error) {
    if (error.code === "auth/email-already-exists") {
      return res.status(400).json({ error: "User account already exists at email address." });
    }
    return res.status(500).json({ error: "Server error. Please try again" });
  }
}