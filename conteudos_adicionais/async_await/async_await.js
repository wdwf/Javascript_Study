/*
  //FUNÇOES ASSINCRONAS

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

  -------
  NOTA: ### O QUE É UMA FUNCTION CALLBACK

  É uma função passada a outra função como argumento, que é então invocada dentro
  da função externa para completar algum tipo de rotina ou ação.

  Exemplo de callback:

  function greeting(name) {
    console.log("Olá" + name);
  }

  function processUserInput(callback) {
    let name = "Bob"
    callback(name);
  }

  processUserInput(greeting)
  -------

  Existem duas formas de se trabalhar com processamento assíncrono (ou seja, Promises) 
  em JavaScript: utilizando o método .then() ou as palavras-chave async e await.


*/

/*
  // UTILIZANDO PROMISES COM .then()

  function getUser(userId) {
    const userData = fetch(`https://api.com/api/user/${userId}`)
      .then(response => response.json())
      .then(data => console.log(data.name))
  }

  getUser(1);

  -- Promises tem um metodo chamado then que recebe uma função callback
  e retorna um um "objeto-promessa".

  Assim, podemos escrever o código do que irá acontecer em seguida, 
  com os dados recebidos pela Promise, e o JavaScript vai aguardar 
  a resolução da Promise sem pausar o fluxo do programa.
 
  > Um exemplo pode ser visto no index.html e script 
*/


/*
  //CAPTURANDO ERROS COM PROMISES

  O manejo de erros é importante em operações assíncronas. 
  Quando o código é síncrono, ele pode lançar pelo menos 
  uma exceção mesmo sem nenhum tipo de tratamento de erros.

  Porém, no assíncrono, exceções não tratadas muitas vezes 
  passam sem aviso e fica muito mais difícil de debugar.

  Não há como utilizar o try/catch quando usamos o .then(), 
  pois a computação só será efetuada após o retorno do objeto-Promise. 
  Então devemos passar funções que executem as alternativas, 
  para o caso de sucesso ou falha da operação. Por exemplo:
*/

function getUser(userId) {
  const userData = fetch(`https://api.com/api/user/${userId}`)
    .then(response => response.json)
    .then(data => console.log(data.name))
    .catch(error => console.log(error))
    .finally(() => console.log('Fim da execução'))
}


/*
  //RESOLVENDO VARIAS PROMESSAS

  No caso de várias promessas que podem ser feitas paralelamente 
  (por exemplo, alguns dados em endpoints REST diferentes), 
  pode-se utilizar Promise.all:

  ||
  Uma Promise podem estar "pendente" (pending) ou "resolvida" (settled). 
  Os estados possíveis, uma vez que uma Promise está settled, são 
  "concluída" (fulfilled) ou "rejeitada" (rejected). Após passar 
  de pending para settled e se definir como fulfilled ou rejected, 
  a Promise não muda mais de estado.
*/

const endpoints = [
  "https://api.com/api/user/1",
  "https://api.com/api/user/2",
  "https://api.com/api/user/3",
  "https://api.com/api/user/4"
]

const promises = endpoints.map(url => fetch(url).then(res => res.json()))

Promise.all(promises)
  .then(body => console.log(body.name))


/*
  //UTILIZANDO O ASYNC/AWAIT

  As palavras-chave async e await, implementadas a partir do ES2017, 
  são uma sintaxe que simplifica a programação assíncrona, 
  facilitando o fluxo de escrita e leitura do código.

*/

async function getUser(userId) {
  let response = await fetch(`https://api.com/api/user/${userId}`);
  let userData = await response.json();
  return userData.name;
}

/*
  RESOLVENDO VARIAS PROMESSAS
*/


async function getUser(userId) {
  let response = await fetch(`https://api.com/api/user/${userId}`);
  let data = await response.json();
  return data;
}

let [ user1, user2 ] = await Promise.all([getUser(1), getUser(2)])

/*
  QUAL A DIFERENÇA ENTRE .then() e async/await

  O async/await surgiu como uma opção mais "legível" ao .then(), 
  mas é importante notar que estes métodos não são logicamente 
  equivalentes: enquanto async/await faz o processamento de 
  forma sequencial, Promises com .then() são processadas em 
  paralelo, o que faz com que este método seja mais rápido.


  async function getCustomerOrders(customerId) {
    const response = await fetch(`https://api.com/api/customer/${customerId}`)
    const customer = await response.json()

    return await Promise.all(customer.orders.map(async (orderId) => {
      const response = await fetch(`https://api.com/api/order/${orderId}`)
      const orderData = await response.json()
      return orderData.amount
    }))
  }

  
*/