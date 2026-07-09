import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  const key = core.getInput("key");
  const id = core.getInput("spreadsheetId");
  const sheet = core.getInput("sheetName");
  const link = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${sheet}?key=${key}`;
  
  fetch(link)
    .then(response => response.json())
    .then((data) => {
      let obj = {};
      for (let r = 0; r < 1000; r++) {
        obj[r+1] = data.value[r];
      };
      core.setOutput("result", obj)
    })
    .catch(error => console.error('Error:', error))
  ;

  core.info(`Complete maybe?`);
} catch (error) {
  core.setFailed(error.message);
};
