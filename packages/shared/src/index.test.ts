import { describe, expect, it } from "vitest";

import {
  campaignOutcomeSchema,
  campaignStatusSchema,
  healthResponseSchema,
} from "./index.js";

describe("shared campaign schemas", () => {
  it("accepts the supported battle outcomes", () => {
    expect(campaignOutcomeSchema.parse("victory")).toBe("victory");
    expect(campaignOutcomeSchema.safeParse("abandoned").success).toBe(false);
  });

  it("keeps campaign lifecycle values explicit", () => {
    expect(campaignStatusSchema.options).toEqual([
      "draft",
      "active",
      "completed",
      "archived",
    ]);
  });

  it("validates the API health contract", () => {
    expect(
      healthResponseSchema.parse({
        service: "aos-campaign-tracker-api",
        status: "ok",
        version: "0.1.0",
      }),
    ).toBeTruthy();
  });
});

