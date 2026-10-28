import request from "supertest";
import { describe, expect, it } from "vitest";

import { healthResponseSchema } from "@aos/shared";

import { createApp } from "./app.js";

describe("API foundation", () => {
  it("returns a valid health response", async () => {
    const response = await request(createApp()).get("/healthz").expect(200);

    expect(healthResponseSchema.parse(response.body)).toMatchObject({
      service: "aos-campaign-tracker-api",
      status: "ok",
    });
  });

  it("returns JSON for unknown routes", async () => {
    const response = await request(createApp()).get("/missing").expect(404);

    expect(response.body).toEqual({ error: "Not found" });
  });
});

