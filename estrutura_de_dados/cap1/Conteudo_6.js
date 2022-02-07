//ES6 e ES7

/*
    ECMAScript é uma especificaçoes de linguagem de scripting. 
    A linguagem JavaScript é uma implementação dessa especificação. 
*/


/*
    Funcioanlidades da ECMAScript 6

    - let e cosnt
    - Templates Literais
    - Desestruturação
    - Operador spread
    - Funçoes de seta =>
    - Classes

    DECLARANDO VARIAVEIS COM LET EM VEZ DE VAR

    Anteriormente era possivel sobreescrever a declaração como no codigo a seguir:
    
    var carro = 'Ford'
    var carro = 'Subaru'

    Porem isso ocasionava em erros e geraçoes de saida incorretas. Na ES6, uma nova 
    palavra reservada let foi introduzida a fim de subistituir var.

    let carro = 'Ford'
    let carro = 'Subaru' -> lança um erro

*/

//ESCOPO DE VARIAVEIS COM LET

//Entendendo como o escopo de let funciona
let filme = 'as aventuras de tintin';
// var filme = 'superman' -> lança um erro variavel ja declarada

function spiderFan() {
    let filme = 'Homen aranha';
    return filme;
}

function classicFan() {
    filme = '007 missão especial'
    return filme;
}

console.log(filme);         //->'as aventuras de tintin'
console.log(spiderFan());     //->'Homen aranha'
console.log(classicFan());    //->'007 missão especial'
console.log(filme);         //->'007 missão especial'



function MagiaFan() {
    let isFan = true;
    let phrase = 'eu juro solenemente não fazer nada de bom';
    console.log('Antes do if:' + phrase);

    if (isFan) {
        let phrase = '...';
        phrase = 'eles estão vindo, temos que sair daqui agora!!!';
        console.log('Dentro do if:' + phrase);
    }

    phrase = 'Malfeito feito.';
    console.log('Depois do if:' + phrase);

}

MagiaFan();
//-> 'Antes do if:' 'eu juro solenemente não fazer nada de bom';
//-> 'Dentro do if:' 'eles estão vindo, temos que sair daqui agora!!!';
//-> 'Depois do if:' 'Malfeito feito.'


//CONTANTE
//A ES6 tambem introduziu a palavra reservada const. Seu comportamento é semelhan te ao let
//porem com o diferencial de que apos definir seu valor não é possivel alterar o mesmo.

const PI = 3.14;
// PI = 1 -> Lança um erro, variavel é uma constante.


//TEMPLATES LITERAIS
// Com ele podemos criar strings sem a necessidade de concatenar os valores

let foraDeContexto = 'Eu chutei coisa';

let frase = {
    texto: `Havia uma coisa no caminho ${foraDeContexto}`
}

let frase2 = `
O dia
ta
foda
`

//FUNÇÕES DE SETA
//Otimo maneira de simplificar a sintaxe das funçoes

let circleArea = (raio) => {
    const PI = 3.14;
    let area = PI * raio * raio;
    return area;
}

console.log(circleArea(2));

//VALORES PADRÃO PARA OS PARAMETRO DAS FUNÇOES

//Com ES6, tambem é possivel definir valores padrão (default)

function soma (x=1, y=2, z=3) {
    return x + y + z;
}

//DECLARANDO OS OPERADORED SPREAD E REST
/*
    Na ES5, podemos trasnformar arrays em parametros usando a função
    apply(). A ES6 tem o operador spread (...) para isso.
*/

let params  = [3, 4, 5];

// Metodo spread ES6
console.log(soma(...params));

// Metodo apply ES5
console.log(soma.apply(undefined, params));

/*
    O operador spread (...) tamebm pode ser usado como um parametro rest em funçoes 
    para substituir arguments.
*/
function restParamaterFunction (x, y, ...a) {
    return (x + y) * a.length;
}

console.log(restParamaterFunction(1, 2, "hello", true, 7));


//PROPRIEDADES MELHORADAS DE OBJETOS
/*
    ES6 introduziu um conceito chamado desestruturação de array, que é
    uma maneira de inicializar variaveis de uma só vez. Por exemplo:
*/

let [x, y] = ['a', 'b'];

/* 
    A desestruturação de array tambem pode ser usada para trocar valores
    (fazer swap) de uma só vez, sem a necessidade de criar variaveis temporarias.

    [x, y] = [y, x];

    Ha tambem uma funcionalidade chamada de abreviação de propriedades (property shorthand),
    que é outra maneira de executar a desestruturação de objetos.
*/

let [t, g] = ['a', 'b'];
let obj = {t, g};
console.log(obj); // {t: 'a', g: 'b'}

/*
    Outra propriedade é a chamada propriedade de metodo (method property).
    Ela permite que se declarem funçoes dentro de objetos como se elas fossem
    propriedades.
*/

let hello = {
    name: 'Ruan',
    printHello() {
        console.log(`Hello ${this.name}`);
    }
}

hello.printHello()



//PROGRAMAÇÃO ORIENTADA A OBJETOS COM CLASSES

/*
    A ES6 tambem introduziu uma maneira mais limpa de declarar classes.

    modo anterior:

    function Book(title, pages, code) {
        ...
    }

    Book.prototype.print = function() {
        ...
    }
*/

//Modo novo
class User {
    constructor (name, username, email) {
        this.name = name;
        this.username = username; 
        this.email = email;
    }
    printUsername() {
        console.log(this.username);
    }
}

let user01 = new User('Ruan', 'Racoon', 'Rac@email.com');
console.log(user01.name);
user01.printUsername();


//HERANÇA

class Book {
    constructor (title, pages, code) {
        this.title = title;
        this.pages = pages;
        this.code = code;
    }
    printTitle() {
        console.log(this.title);
    }
}

//Heranças entre classes
//  É feito uma extenção da classe a ser herdada 

class TechBook extends Book {
    constructor (title, pages, code, technology) {
        super(title, pages, code);
        this.technology = technology;
    }
    printTech() {
        console.log(this.technology);
    }
}

let jsBook = new TechBook('Algoritmos', 200, 12345, 'Javascript');
console.log(jsBook.title);

//TRABALHANDO COM GETTERS E SETTERS

/*
    Com a nova sintaxe  de classes, tambem é possivel criar funçoes 
    getters e setters para os atributos da classe. Embora os atributos da
    classe não sejam privados como em outras linguagens orientadas a objeto
    (o conceito de encapsulamento) é bom seguir um padrão de nomenclatura

    conceito:
    o metodo get tem a função de retornar um valor.
    o metodo set tem a função de atribuir um valor 
*/

class Pessoa {
    constructor (name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    static frase() {
        return 'Gosto de batata S2';
    }
    static fraseSec(otherClass) {
        return 'Hello ' + otherClass._name;
    }
}

let newPerson = new Pessoa('Jom');
console.log(newPerson.name);
newPerson.name = 'Josh';
console.log(newPerson.name);
newPerson._name = 'Sam';
console.log(newPerson.name);

console.log(Pessoa.fraseSec(newPerson));


/*
    O uso de static se vem para impedir que classes instaciadas chamem tal metodo, ou seja:
    pessoa.frase()      - Funcionaria.
    newPessoa.frase()   - Geraria um erro.

    O uso do _ é para simbolizar que o atributo é privado uma vez q o javascript não
    tem essa habilidade.

    OUTRAS FUNCIONALIDADES

    A ES6 tambem tem outras funcionalidades; entre elas, podemos listar os 
    - iteradores, 
    - arrays tipados,
    - Set,
    - Map,
    - WeakSet,
    - WeakMap,
    - modulos,
    - tail calls (chamadas finais),
    - Symbol


    ES7 ...
    

    |------------------------------------------------------|
    | ADICIONAIS....
    |------------------------------------------------------|


    # CLOUSURE
*/