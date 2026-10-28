import { z } from "zod";

export const campaignOutcomeSchema = z.enum(["victory", "defeat", "draw"]);
export type CampaignOutcome = z.infer<typeof campaignOutcomeSchema>;

export const campaignStatusSchema = z.enum([
  "draft",
  "active",
  "completed",
  "archived",
]);
export type CampaignStatus = z.infer<typeof campaignStatusSchema>;

export const healthResponseSchema = z.object({
  service: z.literal("aos-campaign-tracker-api"),
  status: z.literal("ok"),
  version: z.string().min(1),
});
export type HealthResponse = z.infer<typeof healthResponseSchema>;

