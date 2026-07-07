fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${key}`)
  .then(response => response.json())
  .then(data => console.log(data.values))
  .catch(error => console.error('Error:', error));
