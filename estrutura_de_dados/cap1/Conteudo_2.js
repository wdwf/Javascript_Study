// FUNÇOES
/*
    São definiçoes de blocos de codigos que podem ser invocadas nos momentos
    desejados.
    - Funçoes podem receber parametros que são variaveis que se supoe-se que 
    a função fara algo.
    - Para utilizar uma função invocamos ela pelo seu nome e passando os atributos
    necessario caso a mesma necessite deles.
    - é possivel definir valores padroes para os parametros
*/

function hello(name) {
    return console.log("Hello " + name);
}

hello('Harry');

// parametrizando os parametros
function soma(a = 1, b = 1) {
    console.log(a + b);
}

soma(10, 5);
soma();


// Função auto executadora
(() => {
    console.log('função auto executadora')
})();