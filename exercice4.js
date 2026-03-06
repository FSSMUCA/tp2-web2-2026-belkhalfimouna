//declaration des paires
let paire1a= 0,paire1b = "";
let paire2a = 0,paire2b = "0";
let paire3a = 0,paire3b = false;
let paire4a = "",paire4b = false;
let paire5a = null,paire5b = undefined;
let paire6a = null,paire6b = "false";
let paire7a = NaN,paire7b = NaN;
let paire8a = 1,paire8b = "1";
let paire9a = "\t\n",paire9b = 0;
console.log('0==""->'+(paire1a==paire1b)+'| 0==="" ->'+(paire1a===paire1b));
console.log('0=="0"->'+(paire2a==paire3b)+'| 0==="0" ->'+(paire2a===paire2b));
console.log('0==false->'+(paire3a==paire3b)+'|0===false ->'+(paire3a===paire3b));
console.log('""==false->'+(paire4a==paire4b)+'|""===false->'+(paire4a===paire4b));
console.log('null==undefined->'+(paire5a==paire5b)+'| null===undefined->'+(paire5a===paire5b));
console.log('null=="false"->'+(paire6a==paire6b)+'|null==="false" ->'+(paire6a===paire6b));
console.log('NaN==NaN->'+(paire7a==paire7b)+'|NaN===Nan->'+(paire7a===paire7b));
console.log('1=="1"->'+(paire8a==paire8b)+'| 1==="1" ->'+(paire8a===paire8b));
console.log('\t\n==0->'+(paire9a==paire9b)+'| \t\n===0->'+(paire9a===paire9b));
console.log('----------------');
let cmp=0;
if(paire1a==paire1b && paire1a!=paire1b);cmp++;
if(paire2a==paire2b && paire2a!=paire2b);cmp++;
if(paire3a==paire3b && paire3a!=paire3b);cmp++;
if(paire4a==paire4b && paire4a!=paire4b);cmp++;
if(paire5a==paire5b && paire5a!=paire5b);cmp++;
if(paire6a==paire6b && paire6a!=paire6b);cmp++;
if(paire7a==paire7b && paire7a!=paire7b);cmp++;
if(paire8a==paire8a && paire8a!=paire8b);cmp++;
if(paire9a==paire9a && paire9a!=paire9b);cmp++;
console.log(`${cmp} paire(s) où == et === donnent des résultats différents`);





