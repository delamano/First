/*
Mini Desafio:
Crie uma variável chamada temperatura.
Se estiver acima de 30, exiba "Muito calor".
Se estiver entre 20 e 30, exiba "Temperatura agradável".
Se estiver abaixo de 20, exiba "Frio".

Você pode usar comparadores:
=== → igual
!== → diferente
> maior que
< menor que
>= maior ou igual
<= menor ou igual
E também operadores lógicos:
&& → e
|| → ou
! → não
*/

const temperatura = 45;

if (temperatura>=30){
    console.log("Muito calor");
}
else if (temperatura>=20 && temperatura<30){
    console.log("Temperatura Normal");
}
else {
    console.log("Frio");
}

/*
Desafio: Cardápio Interativo
Crie uma variável chamada opcao com valores possíveis de 1 a 4.
Use switch para exibir o prato correspondente:
1 → "Pizza"
2 → "Hambúrguer"
3 → "Salada"
4 → "Sair do menu"
Qualquer outro → "Opção inválida"
*/

const prato = 5;

switch(prato){
    case 1:
        console.log("Pizza");
        break;
    case 2:
        console.log("Hamburguer");
        break;
    case 3:
        console.log("Macarrão");
        break
    case 4:
        console.log("Sushi");
         break;
    default:
        console.log("Opção inválida");
}

/*
let opcao = prompt("Escolha uma opção:\n1 - Pizza\n2 - Hambúrguer\n3 - Salada\n4 - Sair do menu");
    opcao = Number(opcao);

    switch(opcao){
    case 1:
        console.log("Pizza");
        break;
    case 2:
        console.log("Hamburguer");
        break;
    case 3:
        console.log("Macarrão");
        break
    case 4:
        console.log("Sushi");
         break;
    default:
        console.log("Opção inválida");
}
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Escolha uma opção (1-4): ", function(opcao) {
  opcao = Number(opcao);

  switch (opcao) {
    case 1:
      console.log("Você escolheu Pizza.");
      break;
    case 2:
      console.log("Você escolheu Hambúrguer.");
      break;
    case 3:
      console.log("Você escolheu Salada.");
      break;
    case 4:
      console.log("Saindo do menu...");
      break;
    default:
      console.log("Opção inválida.");
  }

  rl.close();
});
