//TIPOS DE DADOS

let num = 1;            //number
let num2 = 1.5;         //number
let name = 'Silf'       //string
let boolValue = true;   //boolean
let nullVar = null;     //null
let und;                //undefined
let obj = {};           //object
let arr = [];           //object -> array
let obj2 = new Object();//object

//VARIAVEIS 
/*
    var
    let
    const
*/


//CONCATENAÇÃO
// É a junção de string utilizando o operador de soma.
// console.log("hello" + nome);


//CONCATENAÇÃO COM TEMPLATE STRING
/*
    Por meio da template string não é necessario o uso do operador de soma
    ao inves se utiliza o seguinte comando ${...}.
    ex:
    console.log(`O preju ficou em ${price} mil ψ(._. )>`);
*/

//ESCOPO

/*
    O escopo se refere ao local onde podemos acessar a variavel no algoritmo.
    - Temos o escopo global e o escopo local 
    - Para o escopo local é necessario utilizar as { ... }
*/

let variavel = 'VarGlobal';

function myFunction() {
    let variavel = 'Local';
    return variavel;
}

function otherFunction() {
    variavel = 'usandoGlobal';
    return variavel;
}

console.log(variavel);//'VarGlobal'
console.log(myFunction());//'Local'
console.log(variavel);//'VarGlobal'
console.log(otherFunction());//'usandoGlobal'

// OPERADORES ARITMETICOS
/*
    Tais operadores seguem uma ordem de precedencia

    ()
    *, /, %
    +,-
    ++, --
*/


//OPERADORES DE ATRIBUIÇÃO
/*
    =
    +=
    -=
    *=
    /=
    %=
*/

//OPERADORES DE COMPARAÇÃO
/*
    ==
    ===
    !=
    <
    >
    <=
    >=
*/

//OPERADORES LOGICOS
/*
    &&
    ||
    !   (inverte o valor)
*/

//OPERADORES BITWISE
/*
    &   - E
    |   - OU
    ~   - Negação
    ^   - OU Exclusivo (XOR)
    <<  - Deslocamento para a esquerda (left shift)
    >>  - Deslocamento para a direita (right shift)

    ex:
*/

console.log('5 & 1:', (5 & 1));
console.log('5 | 1:', (5 | 1));
console.log('~5:', (~5));
console.log('5 ^ 1:', (5^1));
console.log('5 << 1:', (5 << 1));
console.log('5 >> 1:', (5 >> 1));

//OPERADOR UNARIO

// typeof - Retorna o tipo de dado
let dado = 10;
console.log(typeof dado); //number


//INSTRUÇOES CONDICIONAIS

//IF...ELSE
/*
    if (condição) {
        codigo
    } else {
        codigo
    }

    ----
    if (condição) {
        codigo

    } else if (condição) {
        codigo

    } else {
        codigo

    }
*/

// SWITCH

/* 
    switch (key) {
        case value:
            codigo...
            break;

        default:
            codigo...
            break;
    }
*/



//LAÇO DE REPETIÇÃO

// FOR

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// FOR...IN
let lista = ['a','b','c'];
for (let item in lista) {
    console.log(lista[item]);
}

// FOR...OF
for (let item of lista) {
    console.log(item);
}

// WHILE

/*
    let count = 0;

    while(count < 10) {
        console.log(count);
        count += 1;
    }
*/

// DO WHILE

/*
    let count = 0;

    do {
        console.log(count);
        count += 1;
    } while (count < 10);
*/
