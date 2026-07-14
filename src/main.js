const core = require('@actions/core');
const github = require('@actions/github');

try {
  const data = core.getInput("data");
  data.forEach((i) => {
    core.info(i);
  })
} catch (error) {
  core.setFailed(error.message);
};
