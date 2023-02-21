const fs = require('fs');
const csv = require('csv-parser');

function displayFirstLines(filePath, nbLines) {
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
      results.push(data);
      if (results.length === nbLines) {
        console.log(results);
      }
    })
    .on('end', () => {
      console.log('End of file');
    });
}

displayFirstLines('datafilms.csv', 20);