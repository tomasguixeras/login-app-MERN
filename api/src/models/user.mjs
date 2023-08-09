import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  image: {
    type: String,
    default: 'https://res.cloudinary.com/tomyboohngs/image/upload/v1691588849/user_febeuk.png',
    required: false
  },
})


export default mongoose.model('User', userSchema);