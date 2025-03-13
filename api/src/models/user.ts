import bcrypt from "bcrypt";
import { Document, model, Schema } from "mongoose";
import { USER_ROLES } from "../enums";
import { IUser } from "../interfaces";

export interface IUserModel extends IUser, Document {}

const UserSchema = new Schema<IUserModel>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      default: USER_ROLES.USER,
      enum: [USER_ROLES.USER, USER_ROLES.ADMIN],
    },
    avatar: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = model<IUserModel>("User", UserSchema);
export default User;
