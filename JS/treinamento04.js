/*AULA 04
FOR
WHILE
FOR COM ARRAY
*/

// FOR
for (let i=0; i<=20; i++){
    console.log("número: " + i);
}

//FOR só número par
for (let i=0; i<=20; i+=2){
    console.log("número: " + i);
}


//WHILE de 10 até 1 e depois diga Feliz Ano Novo

let i = 10;
while (i>=1){
    console.log (i);
    i--;
}
console.log("Feliz Ano Novo!");

//FOR com array
let lista = ["filme_01", "filme_02", "filme_03", "filme_04", "filme_05"];  
for (let i=0; i<lista.length; i++){
    console.log("Filme: " + lista[i]);
}

