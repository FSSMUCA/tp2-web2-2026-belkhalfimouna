let nombres=[0,NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
let i;
for(i=0;i<nombres.length;i++)
{
    let nombre=nombres[i];
    if(Object.is(nombre,-0))
    {console.log(`${nombre}->zero negatif`);}
    else
    {
    switch(nombre)
    {
        case 0: console.log(nombre);break
        case Infinity: console.log(`${nombre}->INFINI`);break;
        case -Infinity: console.log(`${nombre}->INFINI`);break;
        case 42: console.log(`${nombre}->entier sur`);break;
        case Number.MAX_SAFE_INTEGER + 1:console.log(`${nombre}->ENTIER HORS LIMITES`);break;
        default: 
        if(Number.isNaN(nombre))
            console.log(`${nombre}->invalide`);

        else if(Number.isInteger(nombre))
            console.log(`${nombre}->entier`);
        else
            console.log(`${nombre}->decimal`);
    }
}
}