let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
for (let i = 0; i < valeurs.length; i++) {
  let valeur = valeurs[i];
  let valeurstring = String(valeur);
  if (valeur == "") {
    console.log(`(chaine vide) -> truthy`);
  }
  if (valeur) {
    console.log(`${valeurstring} -> truthy`);
  } 
  else {
    console.log(`${valeurstring} -> falsy`);
  }
}
