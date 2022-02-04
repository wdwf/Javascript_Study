//PILHAS

/*
    Ás vezes necessitamos de alguma forma de estrutura de dados que tenhamos 
    mais controle sobre o acrescimo e a remoção de itens.
    Há duas estruturas de dados que apresentam algumas semelhanças com os arrays, porem
    oferecem mais controle. São elas pilhas (stacks) e as filas (queues)

    Topicos: 
        - A estrutura de dados pilha
        - Adição de elementos a uma pilha
        - Pop (remoção) de elementos de uma pilha
        - Como usar a classe Stack
        - O problema do decimal para binario
*/


//ESTRUTURA DE DADOS PILHA

/*
    Uma pilha é uma coleção ordenada de itens que segue o principio LIFO
    (Last In Last Out, isto é, o ultimo a entrar é o primeiro a sair). A
    adição de novos itens ou a remoção de itens existentes ocorrem na mesma
    extremidade.
    Logo os elementos mais recentes ficam proximos ao topo e os elementos
    mais antigos estão proximos a base.

    Um exemplo visual seria uma pilha de livros.

    Vamos declara nossa propria classe q representa uma pilha.

    push    - add novos elements ao topo da pilha.
    pop     - remove o item do topo da pilha.
    peek    - Devolve o elemento que esta no topo da pilha. (não é removido)
    isEmpty - Devolve true se a pilha não contiver nenhum elemento e false se o tamanho for maior q 0
    size    - Devolve o tamanho da pilha
    clear   - Remove todos os elementos
    metodo adicional (print) -- Mostra a pilha.
*/
let items = [];

function Stack_v1() {

    this.push = function(elements) {
        items.push(elements);
    };
    this.pop = () => {
        return items.pop();
    };
    this.peek = () => {
        return items[items.length - 1];
    };
    this.isEmpty = () => {
        return items.length == 0;
    };
    this.size = () => {
        return items.length;
    }
    this.clear = () => {
        items = [];
    };
    this.print = () => {
        console.log(`Elementos na stack: [${items.toString()}]`);
    };
}

//USANDO A CLASSE STACK

let myStack = new Stack_v1();

console.log('Pilha esta vazia? (antes de add)',myStack.isEmpty());

myStack.push(5);
myStack.push(8);

console.log('Pilha esta vazia? (depois de add) ',myStack.isEmpty());
console.log('Ultimo elemento da pilha: ',myStack.peek());

myStack.push(11);

console.log('Tamanho da pilha: ',myStack.size());

myStack.push(15);

myStack.pop();
myStack.pop();

myStack.print()

//DECLARANDO A CLASSE STACK USANDO A SINTAXE DA ES6
//Esta seria uma definição de classe padrão.

class Stack_v2 {
    constructor () {
        this.items = [];
    }
    push(elements) {
        this.items.push(elements);
    }
    pop() {
        this.items.pop();
    }
}

/*
    Com essa abordagem não podemos declarar variaveis no corpo da classe, portanto
    devemos declarar-las dentro do constructor. E quando for usa-la referenciamos com
    this.nameofVariable.

    Outro ponto é que o codigo mesmo parecendo mais limpo a variavel items é public
    o que de certo modo é ruin ja que o JS não nos permite declarar Stack para ter acesso
    somente aos metodos que estamos expondo na classe. Do contrario, seria possivel remover 
    elementos do meio da pilha e não queremos permitir essa ação.
    
    Vamos analisar outra abordagem que permita ter propriedades privadas.
*/

//CLASSES ES6 COM SYMBOLS NO ESCOPO

/*
    A ES6 introduziu um novo tipo primitivo chamado Symbol que é imutavel e pode
    ser usado como propriedade de um objeto.
*/

let _items = Symbol();

class Stack_v3 {
    constructor () {
        this[_items] = []; //Inicializando o seu valor
    }
    push(element) {
        this[_items].push(element)
    }
    pop() {
        return this[_items].pop()
    }
    print() {
        console.log(`Lista da stackPrivate: [${this[_items].toString()}]`);
    }
}

/*
    Essa abordagem oferece uma propriedade privada falsa para a classe, pois o
    metodo Object.getOwnPropertySymbols tambem foi introduzido na ES6 e pode ser 
    usado para obter todas as propriedades Symbols declaradas na classe. 
*/

let stackPrivate = new Stack_v3();

stackPrivate.push(5);
stackPrivate.push(8);

let objectSymbols = Object.getOwnPropertySymbols(stackPrivate);
console.log('Propriedades Symbols declaradas na classe: ',objectSymbols.length);

stackPrivate[objectSymbols[0]].pop(); // -> este metodo não existe na classe
stackPrivate.print();

/*
    Como podemos ver no codigo anterior, é possivel obter o Symbol _itens acessando
    stack[objectSymbol[0]]. E assim podemos executar qualquer operação de array.
    Toda via não é o que queremos ainda.
*/

//CLASES ES6 COM WEAKMAP

/*
    Ha um tipo de dado denominado weakMap com ele podemos garantir que a 
    propriedade seja privada em uma classe.

    WeakMap -   É capaz de armazenar um um par de chave/valor em que a 'chave' é um objeto
                e o valor pode ser um dado de qualquer tipo

    É utilizado um clousure (cap1-conteudo_6) para que a variavel items_v2 não possa ser alterada por
    nenhuma outra entidade. Assim deixando o escopo de weakMap apenas dentro da função.

    o problema dessa piha é que ela não possibilita herdar as propriedades privadas se estendermos
    essa classe. 
*/

let Stack_v4 = (function () {
    const items_v2 = new WeakMap();

    class Stack_v4 {
        constructor () {
            items_v2.set(this, []); //o set define os valores de items_v2, this -> faz referencia a classe Stack_v4
        }
        push(element) {
            let s = items_v2.get(this);
            s.push(element);
        }
        pop() {
            let s = items_v2.get(this);
            let r = s.pop();
            return r;
        }
        values() {
            return items_v2.get(this);
        }
        isEmpty() {
            return items_v2.get(this).length == 0;
        }
    }
    return Stack_v4;
})();


let stackV4 = new Stack_v4();

stackV4.push(5);
stackV4.push(8);
console.log(stackV4.values());

function divideBy2(decNumber) {
    let remStack = new Stack_v4(),
    rem,
    binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

console.log(divideBy2(233));

//BINARIO = 1|2|4|8|16|32|64|128

//ALGORITMO CONVERSOR DE BASE

function baseConverter(decNumber, base) {
    let remStack = new Stack_v4(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    
    console.log(remStack.values());
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

console.log(baseConverter(100345, 16));