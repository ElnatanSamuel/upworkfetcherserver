const axios = require("axios");

async function fetchJobs() {
  return [
    {
      id: 1,
      title: "React Developer Needed",
      link: "https://www.upwork.com/jobs/~example123",
      posted: "1 hour ago",
    },
    {
      id: 2,
      title: "Node.js API Developer",
      link: "https://www.upwork.com/jobs/~example456",
      posted: "2 hours ago",
    },
  ];
}

module.exports = fetchJobs;
