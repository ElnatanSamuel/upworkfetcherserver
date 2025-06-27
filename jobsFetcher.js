// jobsFetcher.js
const axios = require("axios");
const cheerio = require("cheerio");

const BASE_URL = "https://www.upwork.com/nx/jobs/search/?q=";

async function fetchJobs(keyword = "react developer") {
  try {
    const response = await axios.get(
      `${BASE_URL}${encodeURIComponent(keyword)}`
    );
    const html = response.data;
    const $ = cheerio.load(html);

    const jobs = [];

    $(".job-tile").each((i, el) => {
      const title = $(el).find("h4 a").text().trim();
      const link = "https://www.upwork.com" + $(el).find("h4 a").attr("href");
      const posted = $(el).find(".posted-on").text().trim();

      if (title && link) {
        jobs.push({ title, link, posted });
      }
    });

    return jobs;
  } catch (err) {
    console.error("Error scraping jobs:", err.message);
    return [];
  }
}

module.exports = fetchJobs;
