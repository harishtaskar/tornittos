//All global states
"use client";

import { RecoilRoot, atom } from "recoil";

export default function RecoidContextProvider({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export const reservationsListState = atom({
  key: "reservationsList",
  default: [],
});
