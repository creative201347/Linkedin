import { atom } from "recoil";

export const modalState = atom({
  key: "modalstate",
  default: false,
});

export const modalTypeState = atom({
  key: "modaltypestate",
  default: "dropIn",
});
