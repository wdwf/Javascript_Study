// Funçoes assincronas 

/*
  A definição async function define uma função assincrona, que retorna um objeto AsyncFunction

  async function nome(param, param) {
    codigo
  }

  Quando uma função assíncrona é chamada, ela retorna uma Promise 
  (é um objeto usado para processamento assíncrono. Um Promise (de "promessa") 
  representa um valor que pode estar disponível agora, no futuro ou nunca.)
  Quando a função assíncrona retorna um valor, a Promise será resolvida com 
  o valor retornado. Quando a função assíncrona lança uma exceção ou algum valor, 
  a Promise será rejeitada com o valor lançado.

  Uma função assíncrona pode conter uma expressão await, que pausa a execução da 
  função assíncrona e espera pela resolução da Promise passada, e depois retoma 
  a execução da função assíncrona e retorna o valor resolvido.

*/

function solutionAfter25s(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x)
    }, 2000)
  })
}

async function add1(x) {
  let a = await solutionAfter25s(20);
  let b = await solutionAfter25s(30)
  return x + a + b;
}

