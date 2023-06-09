// Throw, Try, Catch, Finally
/* 
  Try - Define um bloco de codigo para ser testado quanto a erros enquanto esta sendo executado
  Catch - Define um bloco de codigo para lidar com qualquer erro
  Finally - Define um bloco de codigo para ser executado independentimento do resultado do erro
  Throw - instrução que define um erro personalizado
*/

// Erros podem acontecer devido a entradas erradas e outras coisas imprevisiveis

// try {
//   adlert("Welcome guest!");
// } catch (err) {
//   console.log(err);
// }

// Neste proximo exemplo. Se o valor estiver errado, uma exceção (err) é lançada.
// A exceção (err) é capturada pela instrução catch e uma mensagem de erro personalizada é exibida:

function myFunction(mensagem) {
  try {
    if(!mensagem) throw "Mensagem vazia";
    if(isNaN(mensagem)) throw "Não é um numero";
    mensagem = Number(mensagem);
    if(mensagem < 5) throw "Muito pequeno";
    if(mensagem > 10) throw "Muito grande"
  } catch (err) {
    console.log(`Erro encontrado: ${err}`);
  }
}
// myFunction("15")

// Usando o finally

function teste(valor) {
  try {
    if(!valor) throw "Valor vazio revise o codigo..."
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Bloco Finally executado com sucesso ✔");
  }
}

teste()