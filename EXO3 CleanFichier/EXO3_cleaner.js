const fs = require('fs');
const csv = require('csv-parser');

function cleanCsvFile(inputFile, outputFile) {
  const results = [];
  let id = 1;
  fs.createReadStream(inputFile)
    // csv-parser pour parser le fichier CSV
    .pipe(csv())
    // Événement déclenché à chaque ligne du fichier CSV
    .on('data', (data) => {
      // Vérifier si les champs 'Period', 'Data_value' et 'Series_title_2' existent et ne sont pas vides
      if (data.Period && data.Data_value && data.Series_title_2) {
        // Vérifier si le champ 'Series_title_2' contient les valeurs 'Credit', 'Debit' ou 'Services'
        if (data.Series_title_2.includes('Credit') || data.Series_title_2.includes('Debit') || data.Series_title_2.includes('Services')) {
          // Ajouter une colonne 'id' auto-incrémentée
          const cleanedData = { ...data, id: id++ };
          // Ajouter les données nettoyées dans le tableau 'results'
          results.push(cleanedData);
        }
      }
    })
    // Événement déclenché à la fin du fichier CSV
    .on('end', () => {
      // Créer un flux d'écriture pour écrire les données nettoyées dans un nouveau fichier CSV
      const writeStream = fs.createWriteStream(outputFile);
      // Utiliser le module csv-write-stream pour écrire les données dans le nouveau fichier CSV
      const csvWriter = require('csv-write-stream')({ headers: Object.keys(results[0]) });
      csvWriter.pipe(writeStream); // rediriger les données nettoyées vers le fichier de sortie
      results.forEach((result) => csvWriter.write(result)); // écrire chaque ligne nettoyée dans le fichier de sortie
      csvWriter.end(); // fermer le flux d'écriture
    });
}

cleanCsvFile('datafilms.csv', 'result.csv'); // exécuter la fonction de nettoyage avec les fichiers d'entrée et de sortie