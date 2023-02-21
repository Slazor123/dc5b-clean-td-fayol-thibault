const fs = require('fs');

const header = ['Id', 'Nom de la tondeuse', 'Puissance', 'Autonomie', 'Energie'];
const data = [  [1, 'Tondeuse pour cheveux 1', 30, 60, 'électrique'],
  [2, 'Tondeuse pour cheveux 2', 35, 75, 'électrique'],
  [3, 'Tondeuse pour cheveux 3', 25, 45, 'batterie'],
  [4, 'Tondeuse pour cheveux 4', 20, 40, 'batterie'],
  [5, 'Tondeuse pour cheveux 5', 40, 90, 'électrique'],
  [6, 'Tondeuse pour cheveux 6', 30, 60, 'électrique'],
  [7, 'Tondeuse pour cheveux 7', 35, 75, 'électrique'],
  [8, 'Tondeuse pour cheveux 8', 25, 45, 'batterie'],
  [9, 'Tondeuse pour cheveux 9', 20, 40, 'batterie'],
  [10, 'Tondeuse pour cheveux 10', 40, 90, 'électrique'],
  [11, 'Tondeuse pour cheveux 11', 30, 60, 'électrique'],
  [12, 'Tondeuse pour cheveux 12', 35, 75, 'électrique'],
  [13, 'Tondeuse pour cheveux 13', 25, 45, 'batterie'],
  [14, 'Tondeuse pour cheveux 14', 20, 40, 'batterie'],
  [15, 'Tondeuse pour cheveux 15', 40, 90, 'électrique'],
  [16, 'Tondeuse pour cheveux 16', 30, 60, 'électrique'],
  [17, 'Tondeuse pour cheveux 17', 35, 75, 'électrique'],
  [18, 'Tondeuse pour cheveux 18', 25, 45, 'batterie'],
  [19, 'Tondeuse pour cheveux 19', 20, 40, 'batterie'],
];

function writeCsvFile(filename, header, data) {
  const writeStream = fs.createWriteStream(filename);
  writeStream.write(header.join(',') + '\n');
  data.forEach((row) => {
    writeStream.write(row.join(',') + '\n');
  });
  writeStream.end();
}

writeCsvFile('tondeuse.csv', header, data);
