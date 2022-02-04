
// PROGRAMAÇÃO ORIENTADA A OBJETO

/*
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

book.title = 'A viagem de tintin';
console.log(book.title);

// Uma classe tambem pode conter funçoes. Podemos declarar
// e usar uma função em uma classe ja implementada do seguinte modo:

Book.prototype.printTitle = function() {
    console.log(this.title);
}

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

