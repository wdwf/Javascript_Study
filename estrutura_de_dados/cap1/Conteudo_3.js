
// PROGRAMAÇÃO ORIENTADA A OBJETO

/*

    O JavaScript é uma linguagem de programação orientada a objetos (OOP), mas difere das linguagens OOP
    tradicionais como C++, Java e Python em sua abordagem à herança de objetos. Em vez de usar classes para
    definir objetos e herança, o JavaScript usa a abordagem de protótipos.

    Na abordagem de protótipos, cada objeto em JavaScript tem um protótipo, que é um objeto de onde o objeto
    herda propriedades e métodos. Cada protótipo também pode ter um protótipo, criando uma cadeia de 
    protótipos que forma a base do sistema de herança do JavaScript.

    A orientação a protótipos oferece flexibilidade e simplicidade, pois os objetos podem ser criados e 
    estendidos de maneira dinâmica, sem a necessidade de definir classes antecipadamente. Além disso, a 
    abordagem de protótipos permite que os objetos herdem propriedades e métodos diretamente de outros objetos,
    em vez de uma hierarquia de classes.

    - Objetos são coleçoes de pares chave-valor.
    
    - Ha duas maneiras de se declarar um objeto
        * new Object()
        * {}
*/

let pessoa = {
    name: {
        primeiroNome: 'Lucas',
        sobrenome: 'Sabino'
    },
    idade: 20
};

/*
    Em POO, um objeto é uma instancia de uma classe. Uma classe define as caracteristicas
    do objeto.

    NOTA: No JavaScript, this é uma palavra-chave que se refere ao objeto atual no qual o código está 
    sendo executado. Em outras palavras, this faz referência ao objeto do contexto atual de execução.
*/

//- Podemos declarar uma classe que representa um livro da seguinte maneira:
function Book(title, pages, code) {
    this.title = title;
    this.pages = pages;
    this.code = code;
}

// Para instanciarmos essa classe, podemos usar o codigo a seguir:

let book = new Book('Aventuras de PI', 300, 1234);


// Então podemos Acessar o seus atributos e atualiza-lós do seguinte modo:

console.log(book.title);
book.title = 'A viagem de tintin';
console.log(book.title);

// Uma classe tambem pode conter funçoes. Podemos declarar
// e usar uma função em uma classe ja implementada do seguinte modo:

Book.prototype.printTitle = function() {
    console.log(this.title);
}

// Tambem é possivel declarar a função diretamente na definição da classe quando a criamos
/*
    function Book(title, pages, code) {
        this.title = title;
        this.pages = pages;
        this.code = code;
        this.printCode = function() {
            console.log(this.code)
        }
    }
*/

/*
    Quando se trata de herança, o JavaScript tem somente um construtor: objetos. 
    Cada objeto tem um link interno para um outro objeto chamado prototype. 
    Esse objeto prototype também tem um atributo prototype, 
    e assim por diante até o que o valor null seja encontrado como sendo o seu prototype. 
    null que, por definição, não tem prototype, e age como um link final nesta 
    cadeia de protótipos (prototype chain).

    entendendo como funciona:
    - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
    - https://www.w3schools.com/js/js_object_prototypes.asp
*/

book.printTitle();



