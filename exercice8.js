let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";
// le nom
let nomCorrige=nom.trim()|| "inconnu";
console.log(`nom : "${nom}" ->corrige : "${nomCorrige}" (${nom.trim() ? "correct": "coorige (vide)" })`);
//age
let ageNum= Number(age);
if(isNaN(ageNum)|| ageNum <=0)
    console.log(`age : "${age}" -> invalide`);
else {
    console.log(`age : "${age} -> coorige : ${ageNum} (correct)`);
}
// email
let atIndex=email.indexOf("@");
let doAfterAtInddex=atIndex !==-1 &&email.lastIndexOf(".",email.length)>atIndex;
let emailValide=atIndex!==-1 && doAfterAtInddex;
console.log(`email :"${email} ->${emailValide ? "valide" : "invalide"}`);
//4 scoreJeu
let scoreExtrait=parseInt(scoreJeu,10);
if(isNaN(scoreExtrait)) scoreExtrait=0;
console.log(`scoreJeu : "${scoreJeu} -> extrait : ${scoreExtrait}`);
//estAdmine
let estAdminBool=estAdmin==="true"?true :estAdmin ==="false" ? false : null;
if(estAdminBool===null)
{
    console.log(`estAdmin : "${estAdmin}" ->invalide (ni 'true' ni 'false')`);
}
else
{
    console.log(`estAdmin : "${estAdmin}" ->booleen ${estAdminBool}`);
}
//derniereConnexions
let derniereConnexionCorrigee=derniereConnexion ??"Jamais connecte";
console.log(`derniereConnexion : ${derniereConnexion} -> "${derniereConnexionCorrigee}"`);
// nombreConnexions
let nbConnexionxNum=Number(nombreConnexions);
let affichageConnexions=nbConnexionxNum===0 ? "Aucune connexion": nbConnexionxNum;
console.log(`nombreConnexions : "${nombreConnexions}" ->${affichageConnexions}`);
