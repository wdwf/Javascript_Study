//uma função que cria um objeto

function mA(num) {
  this.length = num
  console.log("Objeto:", this);
  for (count = 1; count <= num; count++) {
    this[count] = 0;
  }
  return (this)
}

let teste = new mA(3)

teste.a = 1000
console.log(teste['1']);

console.log("Valor:",teste);

let teste2 = new Array(3)

console.log("Valor2:", teste2);