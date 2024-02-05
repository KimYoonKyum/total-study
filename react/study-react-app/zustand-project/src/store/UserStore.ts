import { create } from "zustand";

type USER_STATE_TYPE = {
  firstName: string;
  lastName: string;
};

type USER_ACTION_TYPE = {
  setFirstName: (firstName: USER_STATE_TYPE["firstName"]) => void;
  setLastName: (lastName: USER_STATE_TYPE["lastName"]) => void;
};

const userStore = create<USER_STATE_TYPE & USER_ACTION_TYPE>((set) => ({
  firstName: "",
  lastName: "",
  setFirstName: (firstName) => set(() => ({ firstName: firstName })),
  setLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

export default userStore;
