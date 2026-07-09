const core = require('@actions/core');
const github = require('@actions/github');

try {
  const key = core.getInput("key");
  const id = core.getInput("spreadsheetId");
  const sheet = core.getInput("sheetName");
  const link = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${sheet}?key=${key}`;
  
  fetch(link)
    .then(response => response.json())
    .then(data => core.setOutput("test", data.value[5]))
    .catch(error => console.error('Error:', error))
  ;

  core.info(`Complete maybe?`);
} catch (error) {
  core.setFailed(error.message);
};
