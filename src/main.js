const core = require('@actions/core');
const github = require('@actions/github');

try {
  const data = core.getInput("data");
  core.setOutput("result", JSON.stringify(data));
} catch (error) {
  core.setFailed(error.message);
};
