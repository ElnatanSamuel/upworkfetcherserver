// server.js
const express = require("express");
const cors = require("cors");
const fetchJobs = require("./jobsFetcher");
const cron = require("node-cron");

const app = express();
const PORT = process.env.PORT || 3000;

let cachedJobs = [];

app.use(cors());

app.get("/jobs", (req, res) => {
  res.json(cachedJobs);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Initial fetch
(async () => {
  cachedJobs = await fetchJobs();
  console.log("Initial job fetch complete");
})();

// Run every 5 minutes
cron.schedule("*/5 * * * *", async () => {
  console.log("Fetching new jobs...");
  cachedJobs = await fetchJobs();
});
