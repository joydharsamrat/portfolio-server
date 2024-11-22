import { model, Schema } from "mongoose";
import { TProfile } from "./profile.interface";

const ProfileSchema: Schema = new Schema<TProfile>(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    image: { type: String, required: true },
    about: { type: String, required: true },
    resumeDownloadLink: { type: String, required: true },
    resumeViewLink: { type: String, required: true },
    facebook: { type: String, required: false },
    linkedIn: { type: String, required: false },
    gitHub: { type: String, required: false },
    phone: { type: String, required: true },
    whatsapp: { type: String, required: false },
    address: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Profile = model<TProfile>("Profile", ProfileSchema);

export default Profile;
