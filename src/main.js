import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  const data = core.getInput("data");
  core.setOutput("result", JSON.stringify(data));
} catch (error) {
  core.setFailed(error.message);
};
