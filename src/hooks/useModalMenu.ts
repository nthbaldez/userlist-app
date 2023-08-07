import { ModalContext } from "@/contexts/ModalContext";
import { useContext } from "react";

export const useModalMenu = () => {
  return useContext(ModalContext);
};
