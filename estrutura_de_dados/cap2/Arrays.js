/*
  ARRAYS
  
    - É uma estrutura de dados simples.
    - Um array armazena valores sequencialmente, sendo estes de tipos diferentes.
    - Por um padrão de melhores praticas atente-se a utilizar apenas um tipo de
    valor em um array definido uma vez que as maiorias das linguagens não tem essa capacidade
    de armazenar valores diferentes.
*/

let temperatura = [];

temperatura[0] = 31.9;
temperatura[1] = 28.9;
temperatura[2] = 30.2;
temperatura[3] = 30.7;
temperatura[4] = 32.2;

//Cada indexe pertence a uma posição do array

//Declarando um array
//let semana = [];
let diasUteis = ['segunda', 'terça', 'quarta', 'quinta', 'sexta'];
console.log(diasUteis.length);

//ACESSANDO ELEMENTOS E ITERANDO UM ARRAY
/*
    Para percorrer o array podemos utiliza o loop for or for...in ou for...of
*/
for (let item in diasUteis) {
    console.log(diasUteis[item]);
}

/*
    Exemplo: queremos descobrir quais são os vinte primeiros numeros da sequencia
    de fibonacci. Os dois primeiros numeros da sequencia são 1, 1 e cada numero
    subsequente é a soma dos dois numeros anteriores
*/

let fibonacci = [0,1,1];


for (let i = 3; i <= 20; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for (let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}

//ACRESCENTANDO ELEMENTOS
/*
    Em javascript, um array é um objeto mutavel e dinamicos, podendo facilmente ser alterado
    ao contrario das linguagens Java e C onde é necessario atribuir com antecedencia o 
    tamanho do array.
*/

let numeros = [0,1,2,3,4,5,6,7,8,9];

//modo 'bruto' de adicionar um novo elemento ao final do array
numeros[numeros.length] = 10;
console.log('Modo bruto add ao final:', numeros);

//modo 'bruto' de adicionar um novo elemento ao inicio do array
for (let i = numeros.length; i >= 0 ; i--) {
    numeros[i] = numeros[i-1]
}

numeros[0] = -1;
console.log('Modo bruto add ao inicio:', numeros);

//modo bruto para remover do inicio do array
//Nota: mesmo removendo teremos um elemento definido como undefined
for (let i = 0; i < numeros.length; i++) {
    numeros[i] = numeros[i+1]
}
console.log('Modo bruto remover do inicio:',numeros);


//- USANDO METODOS

/*
    .push(value)    -> ACRESCENTA novos elementos ao FINAL do array
    .pop()          -> REMOVE o ULTIMO elemento do array
    .unshift(value) -> ACRESCENTA novos elementos ao INICIO do array
    .shift()        -> REMOVE o PRIMEIRO elemento do array
*/

numeros.push(11, 12);
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.unshift(-2, -1);
console.log(numeros);

numeros.shift();
console.log(numeros);

//ACRESCENTANDO E REMOVENDO ELEMENTOS DE UMA POSIÇÃO ESPECIFICA
/*
    O metodo splice pode ser usado para remover um elemento de um array, simplesmente
    especificando a posição/indice a partir da qual queremos fazer a remoção e a quantidade
    de elementos queremos remover. 

    EX:
    .splice(5,3) -> Ele iniciara na posição 5(de acordo com o index) e removerá 
    os elementos (de acordo com o length)
    
    [0,1,2,3,4,(5,6,7),8,9] -> O numeros 5,6,7 serão apagados

    >este mesmo metodo pode ser usado para substituir os elementos em determinada
    posição
    .splice(5,3, 100, 200) -> ele vai tirar 3 elemento e adicionar no lugar o 100 e o 200
    
    [0,1,2,3,4,100,200,8,9]
*/

let contagem = [0,1,2,3,4,5,6,7,8,9];
contagem.splice(5,3);
console.log('CONTAGEM: ',contagem);

/*
    Vamos supor que queremos inserir os numeros de 2 a 4 de volta no array a partir da posição
    5.
*/

contagem.splice(5,0,2,3,4);
console.log('CONTAGEM: ',contagem);


//ARRAYS BIDIMENSIONAIS E MULTIDIMENSIONAIS

let arrBid = [
    [32, 31, 30],
    [31, 31, 30]
]

console.log(arrBid);

/*
    O Javascript aceita apenas arrays unidimensionais, não tendo suporte para matrizes.
    Contudo podemos implementar qualquer array multidimensional, usando array de arrays.
    
    Para acessar os elementos definidos anteriormente podemos fazer do seguinte modo.
*/

console.log(arrBid[0][0]);
console.log(arrBid[0][1]);
console.log(arrBid[0][2]);
console.log('\n');
console.log(arrBid[1][0]);
console.log(arrBid[1][1]);
console.log(arrBid[1][2]);


//ITERANDO PELOS ARRAYS BIDIMENSIONAIS

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {

        for (let c = 0; c < matrix[i].length; c++) {
            console.log(matrix[i][c]);
        }

    }
}

printMatrix(arrBid)


//ARRAYS MULTIDIMENSIONAIS
let matrix3 = [];

for (let x = 0; x < 3; x++) {
    matrix3[x] = [];

    for (let y = 0; y < 3; y++) {
        matrix3[x][y] = [];

        for (let z = 0; z < 3; z++) {
            matrix3[x][y][z] = x+y+z;
        }
    }
}

console.log('\n', "matris de 3:", matrix3);


//REFERENCIAS PARA METODOS DE ARRAY EM JAVASCRIPT

/*
    Os arrays em javascript são bem interessantes , pois são muito eficazes e tem mais
    recursos disponiveis que os arrays primitivos de outras linguagens.
    
    - Alguns deles são:
*/

let exemploNum = [1,2,3,4,5,6,7,8,9,10];
let exemploNum02 = [11,22,33];
let idades = [17, 22, 33, 44,]

function isEven(num) {
    console.log(num);
    return (num % 2 == 0) ? true : false; 
}

function checkNum(num) {
    return num > 18;
}

function checkAdult(num) {
    return num >= 18;
}


function checkBiggerFirst(num) {
    return num > 18;
}

function soma2(num) {
    return num + 2;
}


// concat(value, value...) - Junta varios arrays e devolve uma copia dos arrays concatenados.
let test_Concat = exemploNum.concat(exemploNum02);
console.log('Concat: ', test_Concat);


// every(value) - Itera em todos os elementos do array, verificando uma condição desejada (função) ate que false seja devolvido
let test_Every = idades.every(checkNum)
console.log(test_Every);


// filter() - Cria um array com todos os elementos avaliados com true pela função especifica.
const test_Filter = idades.filter(checkAdult);
console.log(test_Filter);


// find() -  Encontra o valor do primeiro elemento com um valor maior que 18;
let test_Find = idades.find(checkBiggerFirst);
console.log('\ntest_Find',test_Find);


// forEach - Executa uma função especifica em cada elemento do array
let test_ForEach = exemploNum.forEach(soma2);
console.log("\ntest_ForEach",test_ForEach);

// reduce(() => {}, [valor inicial]) - executa uma função em cada elemento da matriz em ordem, passando o valor de retorno do cálculo no elemento anterior. 
// Se necessario é possivel fornecer um valor inicial, se não ele pega do primeiro indice
let test_Reduce = exemploNum.reduce(function(previous, current, index) {
    return previous + current;
})
console.log('test_Reduce',test_Reduce);


// join() - Reune todos os elementos do array em uma string
let test_Join = exemploNum.join(' end ')
console.log(test_Join);

// indexOf - Pesquisa o array em busca de elementos especificos e devolve a sua posição(index)
let test_IndexOf = exemploNum.indexOf(8);
console.log(test_IndexOf);

// lastIndexOf - Devolve a posição do ultimo item do array que corresponda aos criterios de pesquisa
let test_lastIndexOf = exemploNum.lastIndexOf(8);
console.log(test_lastIndexOf);

// map - Cria um novo array a partir de uma função que contem os criterios/condiçoes e devolve os
// elementos do array que correspondam aos criterios
let test_Map = exemploNum.map(isEven)
console.log('\ntest_Map',test_Map);

// reverse - Inverte o array, de modo que os ultimos itens serão os primeiros e vice-versa.
let test_Reverse = exemploNum.reverse();

// slice - Devolve um novo array a partir do indice especificado
let test_Slice = exemploNum.slice(4, 7);
console.log('test_Slice',test_Slice);


// some - Itera em todos os elementos do array, verificando uma condição desejada (função) ate
// que true seja devolvido
let test_Some = exemploNum.some(isEven)
console.log("\ntest_Some",test_Some);

// sort - Organiza o array em ordem alfabetica ou de acordo com a função fornecida
// porem ele funciona melhor com letras do que com numeros
let test_Sort = exemploNum.sort((a, b) => a - b);
console.log(test_Sort);

// toString - Devolve o array na forma de uma string
let test_ToString = exemploNum.toString();
console.log(test_ToString);


//valueOf - É semelhante ao metodo toString e devolve o array em forma de uma string
let test_ValueOf = exemploNum.valueOf();
console.log(test_ValueOf);




console.log('\n');
//---------------------------------------------
//NOVAS FUNCIONALIDADES DE ARRAY

/*
   Novas funcionalidades baseadas nas especificaçoes da ES6 e ES7 
*/

let numbers = [1,2,3,4,5,6,7,8,9]

//@@iterator - Devolve um objeto iterador que contem os pares chave/valor do array; 
//             pode ser chamado de modo sincrono para recuperar a chave/valor dos elementos do array.
//             Para usar este metodo é necessario acessar a propriedade Symbol.iterator.
//             Ao chegar no final do array usando o metodo next se encontra value: undefined, done: true

// Com este metodo é possivel recriar o console.log

let iterator = numbers[Symbol.iterator]();
console.log("@@iterator -",iterator);
console.log("@@iterator -",iterator.next());
console.log("@@iterator -", iterator.next().value);


//copyWithin - Copia uma sequencia de valor do array para a posição de um indice de inicio
let arrayCopyW = [1,2,3,4,5,6]

arrayCopyW.copyWithin(1,3,5);
console.log(arrayCopyW);



//entries - Devolve @@iterator, que contem pares chave/valor
//Ser capaz de obter pares de chave/valor é muito util quando envolve trabalho com conjuntos, dicionairos, hash maps
let Entries = numbers.entries();
console.log(Entries);
console.log(Entries.next()); //[0, 1] - posição(index) 0, valor 1



//includes - Devolve true caso um elemento seja encontrado no array e false caso contrario
//           Foi adicionado na ES7
//           É possivel passar o index inicial de 'pesquisa'
console.log('includes:', numbers.includes(4));
console.log('includes com index:', numbers.includes(6, 4));


//find - Busca um elemento no array, dada uma condição desejada (função de callback) e
//       devolve o primeiro elemento que satisfaça os requisitos caso ele seja encontrado.
let numerosFind = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function multipleIf13(element, index, array) {
    return (element % 13 == 0) ? true : false;
}

console.log('Find:', numerosFind.find(multipleIf13));


//findIndex - Busca um elemento no array, dada uma condição desejada (função de callback) e
//            devolve o indice do elemento caso ele seja encontrado.
console.log('Find Index:', numerosFind.findIndex(multipleIf13));


//fill - Preencha o array com um valor estático
//       Este metodo altera o array original
let usingOfTest = Array.of(1,2,3,5,6);
// let copyNumbersFill1 = usingOfTest.fill(0);
usingOfTest.fill(2,1,3); //preenche com '2' a partir do index 1 ate o indice 3(não inclusivo)
// console.log('Metodo fill:',copyNumbersFill1);
console.log('aa', usingOfTest);
//O metodo fill é otimo quando se deseja criar um array e inicializar seus valores:
let ones = Array(6).fill(1);



//from - Cria um novo array a partir de um array existente.
//       Copia um array ja existente  
let newArray = Array.from(numbers, x => (x % 2 == 0));
console.log(newArray);

let copyArraywithFrom = Array.from(numbers)
console.log(copyArraywithFrom);



//keys - Devolve @@iterator, que contem as chaves do array.
let usingKeys = numbers.keys();
console.log(usingKeys.next());


//of - Cria um novo array a partir dos argumentos passados para o metodo.
//     Cria uma copia de um array ja existente
let usingOf = Array.of(1,2,3,5,6);
let copyOf = Array.of(...numbers);
console.log(usingOf);
console.log(copyOf);


//values - Devolve @@iterator, que contem os valores do array.

let arrayValues = ["a","b","c"]
const resultValues = arrayValues.values()

for (const value of resultValues) {
    console.log("valuer method:",value);
}


//ORDENANDO ELEMENTOS
console.log('\n');

let orderArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
orderArray.reverse();
console.log(orderArray);

// orderArray.sort();
// console.log(orderArray);//Retorna a organização errada

orderArray.sort(function(a,b) {
    return a-b;
})
console.log(orderArray);


//ORDENAÇÃO PERSONALIZADA
let listaPessoas = [
    {name: 'Boc', age:25},
    {name: 'Jom', age:19},
    {name: 'Ana', age:20}
]

function comparePerson(a,b) {
    if (a.age < b.age) {
        return -1
    }
    if (a.age > b.age) {
        return 1
    }
    return 0;
}
//or
function comparePerson2(a,b) {
    return a.age - b.age;
}
console.log(listaPessoas.sort(comparePerson));


//Ordenando string
let names = ['Ana', 'ana', 'John', 'john'];

names.sort(function(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
})

console.log(names);

//Para caracteres com acento, podemos usar o metodo localeCompare

let names2 = ['Maéve', 'Maeve'];

console.log(names2.sort(function(a,b) {
    return a.localeCompare(b);
}));
//['Maeve', 'Maéve']



// CLASSE TYPEDARRAY
/*
    Podemos armazenar qualquer tipo de dado em arrays, por javascript não ser
    fortemente tipado. 
    Para contornar isso foi criado o TypedArray para que fosse possivel trabalhar com um unico
    tipo de dado.

    let myArray = new TypedArray(length) -> TypeArray deve ser substituido por uma classe conforme as especificaçoes ex: Int16Array, Uint16Array
*/
let length = 5;

let int16 = new Int16Array(length);

let array16 = [];
array16.length = length;

for (let i = 0; i < length; i++) {
    int16[i] = i + 1;
}

console.log(int16);



// DESTRUCTURING IN ARRAY
// Funcionalidade apenas do ES6

// const colection = [1,2,3,4,5,6,7,8,9,10]
// let { length, 0: first, [length - 1]: last } = colection;

// console.log(first, last);