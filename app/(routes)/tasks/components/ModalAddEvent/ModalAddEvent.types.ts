import { Company } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export type ModalAddEventProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setOnSaveNewEvent: Dispatch<SetStateAction<boolean>>;
  companies: Company[];
  setNewEvent: Dispatch<
    SetStateAction<{
      eventName: string;
      companieSelected: { name: string; id: string };
    }>
  >;
};
