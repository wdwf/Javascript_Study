// REALIZANDO USO DO .THEN() E .CATCH()
function getUser(idUser) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${idUser}`)
  .then((response) => response.json())
  // .then(data => {
  //   if(Object.keys(data).length === 0 ) {
  //     throw "Objeto vazio"
  //   }
  //   console.log(data.title)
  // })
  .then(data => {
    if(data.title === undefined) {
      throw "Objeto vazio"
    }
    console.log(data.title)
  })
  .catch(error => console.log(error))
  .finally(() => console.log("Processo finalizado..."))
}
//-----------------------------------------------//
//USO DO ASYNC/AWAIT
async function getUserTwo(idUser) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idUser}`);
    let dataUser = await response.json();
    console.log(dataUser.title)
  }
  catch (error) {
    console.log(error);
  }
}


let input = document.getElementById('userId');
let btn = document.getElementById('btnSearch');

btn.addEventListener('click', () => {
  getUser(input.value)
  getUserTwo(input.value+1)
})