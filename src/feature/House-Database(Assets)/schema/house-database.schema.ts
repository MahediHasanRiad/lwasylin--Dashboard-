import { z } from "zod";

export const HouseDatabaseSchema = z.object({
  houseName: z.string(),
  propertyCode: z.string(),
  location: z.string(),
  houseHoldItems: z.string().min(1, "Add minimum 1 item"),
  tenantName: z.string(),
  tenantNumber: z.string(),
  houseManager: z.string(),
  communityName: z.string().min(4, "Minimum 4 character"),
  lastInvestigation: z.string().optional(),
  nationName: z.string(),
  photos: z.array(z.instanceof(File)).optional(),
});

export type HouseDatabaseSchemaType = z.infer<typeof HouseDatabaseSchema>;
