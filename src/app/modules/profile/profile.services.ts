import { TProfile } from "./profile.interface";
import Profile from "./profile.model";

const getProfile = async () => {
  const result = await Profile.findOne();
  return result;
};

const updateProfile = async (id: string, payload: Partial<TProfile>) => {
  const result = await Profile.findByIdAndUpdate(
    id,
    {
      $set: { ...payload },
    },
    { new: true }
  );
  return result;
};

export const profileServices = { getProfile, updateProfile };
