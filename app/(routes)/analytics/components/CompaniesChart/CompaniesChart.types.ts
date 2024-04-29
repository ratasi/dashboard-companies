import { Company, Event } from "@prisma/client";

export type CompaniesChartProps = {
  companies: Company[];
  events: Event[];
};
