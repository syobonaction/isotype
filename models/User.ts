import  mongoose, { Schema, model } from  "mongoose"

export interface UserDocument {
  _id: string
  userId: string
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<UserDocument>({
  userId: {
    type: String,
    unique: true,
    required: [true, "UserId is required"]
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email is invalid",
    ],
  },
},
{
  timestamps: true,
})

const User = mongoose.models?.User || model<UserDocument>('User', UserSchema)

export default User