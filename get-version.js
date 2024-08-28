const fs = require('fs');
const xml2js = require('xml2js');

// Lire le contenu du fichier pom.xml
const pomFile = fs.readFileSync('pom.xml', 'utf8');

// Parser le contenu XML
xml2js.parseString(pomFile, (err, result) => {
    if (err) throw err;

    // Extraire la version
    const version = result.project.version[0];

    // Sauvegarder la version dans un fichier JSON
    fs.writeFileSync('js/version.json', JSON.stringify({ version }));
});
