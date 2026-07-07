import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  const key = core.getInput("key");
  const id = core.getInput("spreadsheetId");
  const sheet = core.getInput("sheetName");
  const link = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${sheet}?key=${key}`;
  
  fetch(link)
    .then(response => response.json())
    .then(data => core.info(data.values))
    .catch(error => console.error('Error:', error))
  ;

  core.info(`Completed (probably)`);
  core.setOutput("result", 'testing');
} catch (error) {
  core.setFailed(error.message);
};
