import { Company, Event } from "@prisma/client";

export type CalendarProps = {
  companies: Company[];
  events: Event[];
};
