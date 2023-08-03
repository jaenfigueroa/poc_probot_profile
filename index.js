const { run } = require("probot");
const app_issues = require("./src/issues");

// pass a probot app function
run(app_issues);