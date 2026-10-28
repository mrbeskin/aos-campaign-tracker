import cors from "cors";
import express from "express";

import {
  healthResponseSchema,
  type HealthResponse,
} from "@aos/shared";

const localDevelopmentOrigins = [
  "http://127.0.0.1:5173",
  "http://localhost:5173",
];

function configuredOrigins(): Set<string> {
  const productionOrigins = (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return new Set([...localDevelopmentOrigins, ...productionOrigins]);
}

export function createApp() {
  const app = express();
  const allowedOrigins = configuredOrigins();

  app.disable("x-powered-by");
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || allowedOrigins.has(origin)) {
          callback(null, true);
          return;
        }

        callback(new Error("Origin is not allowed"));
      },
    }),
  );
  app.use(express.json({ limit: "256kb" }));

  app.get("/healthz", (_request, response) => {
    const body: HealthResponse = healthResponseSchema.parse({
      service: "aos-campaign-tracker-api",
      status: "ok",
      version: process.env.npm_package_version ?? "0.1.0",
    });

    response.status(200).json(body);
  });

  app.use((_request, response) => {
    response.status(404).json({ error: "Not found" });
  });

  return app;
}

