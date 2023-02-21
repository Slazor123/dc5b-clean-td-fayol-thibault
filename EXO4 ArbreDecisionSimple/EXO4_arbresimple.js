// Définir un tableau de données d'objets de personnes
const personnes = [
    { nom: 'Alice', age: 25, emploi: 'marketing' },
    { nom: 'Bob', age: 35, emploi: 'développeur' },
    { nom: 'Charlie', age: 40, emploi: 'designer' },
    { nom: 'Dave', age: 30, emploi: 'développeur' },
    { nom: 'Eve', age: 45, emploi: 'marketing' }
  ];
  
  // Définir une fonction qui renvoie une liste de personnes qui ont un âge supérieur à 30 ans
  function filtrerPersonnesAge(personnes) {
    return personnes.filter(personne => personne.age > 30);
  }
  
  // Définir une fonction qui renvoie une liste de personnes qui sont employées dans l'industrie de la technologie
  function filtrerPersonnesTechnologie(personnes) {
    return personnes.filter(personne => personne.emploi === 'développeur' || personne.emploi === 'designer');
  }
  
  // Définir une fonction qui combine les deux fonctions précédentes pour renvoyer une liste de personnes qui ont un âge supérieur à 30 ans et sont employées dans l'industrie de la technologie
  function filtrerPersonnesAgeEtTechnologie(personnes) {
    const personnesAge = filtrerPersonnesAge(personnes);
    const personnesTechnologie = filtrerPersonnesTechnologie(personnesAge);
    return personnesTechnologie;
  }
  
  // Tester les fonctions avec la liste de données de personnes
  console.log(filtrerPersonnesAge(personnes));
  console.log(filtrerPersonnesTechnologie(personnes));
  console.log(filtrerPersonnesAgeEtTechnologie(personnes));
  