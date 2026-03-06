let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250
let sousTotal=prix*quantite;
//calculer la reduction
let reduction;
if(estMembre&&codePromo!=null)
    reduction=5;
else
    reduction=0;
//calculer total final
let totalFinal=sousTotal-reduction;
//verifier le compte
let nouveausole;
let statut;
if(soldeCompte>=totalFinal)
{console.log("");
    statut="paiement accepte";
    nouveausole=soldeCompte-totalFinal;
}
else
{
    console.log("Solde insuffisant");
    nouveausole=soldeCompte;
}
console.log("===== RÉCAPITULATIF =====");
console.log("Produit   : Clavier mécanique");
console.log(`quantite : ${quantite}`);
console.log(`prix unite :${prix} MAD`);
console.log(`prix unite :${prix} MAD`);
console.log(`sous total :${sousTotal} MQD`);
console.log(`reduction :${reduction} MAD`);
console.log(`Total :${totalFinal} MAD`);
console.log(`statut :${statut}`);
console.log(`solde :${nouveausole} MAD`);
console.log("=========================");



