import { model, models, Schema, Types } from "mongoose";

export interface Accountreturn {
  userid: Types.ObjectId;
  image?: string;
  password: string;
  provider?: string;
  providerAccountId: string;
}

const AccountSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String },
    password: { type: String },
    provider: { type: String },
    providerAccountId: { type: String, required: true },
  },
  { timestamps: true }
);

const Account = models?.Account || model<Accountreturn>("Account", AccountSchema);

export default Account;
