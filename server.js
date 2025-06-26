// server.js
const express = require("express");
const cors = require("cors");
const fetchJobs = require("./jobsFetcher");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/jobs", async (req, res) => {
  try {
    const jobs = await fetchJobs();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

app.get("/", (req, res) => {
  res.send("Upwork Job Fetcher API is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
