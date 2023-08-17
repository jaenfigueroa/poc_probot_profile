const { ProbotOctokit } = require('probot')

const octokit = new ProbotOctokit({
  auth: {
    token: process.env.GITHUB_TOKEN,
  },
})

module.exports = {
  octokit,
}
