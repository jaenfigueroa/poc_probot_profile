// main.js
const { run } = require("probot");
const app = require("./src/index");

// pass a probot app function
run(app);