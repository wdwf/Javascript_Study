//Objeto

let person = {
  name: 'Bob',
  age: 23,
  likeCars: true
}

let person_2 = new Object({ name: 'Ana', age: 20 })

console.log(person.name);
console.log(person_2['name']);

//-----------------------------------
//Iterando sobre os objetos
let txt = "";

for(item in person) {
  txt += person[item];
}

console.log(txt);

//-----------------------------------
// add properties
person.nationality = 'brazil';
person.abc = 'abc';

//-----------------------------------
// remove properties
delete person.abc

//-----------------------------------
// Object Methods

const person_3 = {
  firstName: 'jom',
  lastName: 'Brow',
  fullname() {
    return `${this.firstName} ${this.lastName}`
  },
  likeCoffe: true
}

console.log(person_3.fullname());

//-----------------------------------
function Monster(name, type, color) {
  return {
    name,
    type,
    color
  }
}

let monster_1 = new Monster('Salar', 'Mandragra', 'blue')

console.log(monster_1);
//-----------------------------------
//Teste de existência de propriedade, operador “in”

console.log("type" in monster_1);

//DESAFIO---
//Escreva a função isEmpty(obj)que retorna truese o objeto não tiver propriedades, falsecaso contrário.
let obj_1 = {}
let obj_2 = {value: 42}

function isEmpty(object) {

  for(let item in object) {
    return false;
  }

  return true;
}

function isEmptyMark2(obj) {
  return !(!!Object.values(obj).length)
}

console.log(isEmpty(obj_1));
console.log(isEmptyMark2(obj_1));

//Escreva o código para somar todos os salários e armazene na variável sum. Deve estar 390no exemplo acima.
let salario = {
  // jom: 100,
  // Ann: 160,
  // Pet: 130
}

function SumSalaries(obj) {
  if (isEmptyMark2(obj)) {
    return 0
  }

  let sum = 0;

  for (let user in obj) {
    sum += obj[user]  
  }
  
  return sum;
}

console.log(SumSalaries(salario));



// Referências e cópias de objetos

/*
Uma das diferenças fundamentais de objetos versus primitivos é que os objetos 
são armazenados e copiados “por referência”, enquanto os valores primitivos: 
strings, números, booleanos, etc – são sempre copiados “como um valor inteiro”.
*/

let msn = 'Hello';
let frase = msn;

let user = {
  name: 'Bob'
}

let nameUser = user;

nameUser.age = 32;

console.log('t1',nameUser)
console.log(user);

/*
É como se tivéssemos um armário com duas chaves e usássemos uma delas ( admin) para 
entrar e fazer alterações. Então, se mais tarde usarmos outra chave ( user), ainda 
estamos abrindo o mesmo gabinete e podemos acessar o conteúdo alterado.
*/

//Clonando objetos
/*
  é possivel fazer por meio de itaraçoes ou atraves de um metodo (Object.assign)
*/

let obj_3 = {
  name: 'josh',
  age: 42
}

//Nota: Este tipo de clonagem não funciona com objetos aninhados 
let clone = {}
for (let key in obj_3) {
  clone[key] = obj_3[key] 
}

console.log(clone);

// ou

let permission1 = { canView: true };
let permission2 = { canEdit: true };

let clone_2 = Object.assign({}, obj_3, permission1, permission2);

obj_3.gener = 'M'
console.log(obj_3);
console.log(clone_2);



//CLONAGEM PROFUNDA

/*
  Objetos aninhados devem ter uma clonagem profunda pois do contrario ainda serãm feitas
  referencias ao copiar tal objeto
*/

let obj_4 = {
  type: 'Eletronic',
  name: 'TV',
  size: {
    height: 182,
    width: 50
  }
}

let clone_3 = {}
for (let item in obj_4) {
  clone_3[item] = obj_4[item]
}

obj_4.size.height = 200
console.log(obj_4);
console.log(clone_3);


let obj_5 = {
  type: 'Avião',
  size: {
    height: 182,
    width: 50
  },
  fly() {
    return true
  }
}

let clonagemProfunda = { ...obj_5, size: { ...obj_5.size } }

obj_5.size.width = 100
console.log(obj_5);
console.log(clonagemProfunda);


// Object - Methods THIS

let userTest = {
  firstname: 'fulano',
  lastname: 'Siclano',
  fullname() {
    return `${this.firstname} ${this.lastname}`
  }
}

console.log(userTest.fullname());

// Constructor New



function User(name) {
  this.name = name;
}
//é o mesmo que executar
/*
  let user = {
    name: 'jack'
  }

  !! porem com o constructor o processo se torna reutilizavel
*/

let user_1 = new User('Alice')
let user_2 = new User('Josh')

console.log(user_1, user_2);

//Encadeamento opcional ?

let value_1 = null;
let value_2 = 10;

let result = false ? value_1 : value_2;

console.log(result);

let teste = {
  name: 'teste01',
  type: {
    id: 11,
    target: 'tty',
    log: {
      fild: 'completed'
    }
  },
  online() {
    console.log('Active on');
  }
}

console.log(teste.type.log?.fild);
teste.online?.()


// Symbol - identificadores unicos
let idUnic = Symbol("id")

let SymbolTest = {
  id: 1,
  [idUnic]: 123
} 

console.log(SymbolTest[idUnic]);

//Conversão de objeto para primitivo

let bank = {
  name: 'sander',
  money: 1000,
}

console.log(bank.valueOf());

console.log(+teste);
