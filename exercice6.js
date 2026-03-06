let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;
//partie A
console.log(`nom ?? "valeur par défaut"    -> ${nom}`);
console.log(`age ?? "valeur par défaut"    -> ${age}`);
console.log(`ville ?? "valeur par défaut"    -> ${ville}`);
console.log(`score ?? "valeur par défaut"    -> ${score}`);
console.log(`actif ?? "valeur par défaut"    -> ${actif}`);
//partie B
console.log(`nom   || "valeur par défaut"    -> ${nom}`);
console.log(`age   || "valeur par défaut"    -> ${age}`);
console.log(`ville || "valeur par défaut"    -> ${ville}`);
console.log(`score || "valeur par défaut"    -> ${score}`);
console.log(`actif || "valeur par défaut"    -> ${actif}`);
console.log("--partie C--")
//si la variable est null ou undefined retour default
if(console.log(nom??"defaut") && (nom|| "defaut"))
{
    console.log("nom ?? et || -> meme resultat");

}
else
{console.log("nom ?? et || -> resultat different");}

if(console.log(age??"defaut")&&(age|| "defaut"))
{
    console.log("age ?? et || -> meme resultat");

}
else
{console.log("age ?? et || -> resultat different");}

if(console.log(ville??"defaut")&&(ville|| "defaut"))
{
    console.log("ville ?? et || -> meme resultat");

}
else
{console.log("ville ?? et || -> resultat different");}

if(console.log(score??"defaut")&&(score||"defaut"))
{
    console.log("score ?? et || -> meme resultat");

}
else
{console.log("score ?? et || -> resultat different");}

if(console.log(actif??"defaut")&&(actif|| "defaut"))
{
    console.log("actif ?? et || -> meme resultat");

}
else
{console.log("actif ?? et || -> resultat different");}

