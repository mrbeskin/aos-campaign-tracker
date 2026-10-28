import { createApp } from "./app.js";

const port = Number.parseInt(process.env.PORT ?? "8080", 10);
const app = createApp();

app.listen(port, () => {
  console.log(`Campaign Tracker API listening on port ${port}`);
});

