/*
    -- SETTIMEOUT--

    SetTimeout executa uma função depois de tantos milesegundos
    1 Segundo = 1000 milesegundos

    O setTimeout é executado apenas 1 vez.
    Se usa o clearTimeout() para impedir que a função seja iniciada:
     - clearTimeout(myTimeout); 
*/

function aviso() {
    return console.log('Você foi avisado!!!');
}

//Essa função seria executada por um botão para parar o funcionamento do setTimeout antes q ele fosse executado. 
// function pararAvisos() {
//     clearTimeout(noticia)
// }

const noticia = setTimeout(aviso, 5000);


/*
    SetInterval

    Executa uma função a cada tantos milesegundos.
    Este método continua chamando a função até clearInterval()ser chamado ou a janela ser fechada.
    Se usa o clearInterval() para impedir que a função continue a ser propagada.

    é possivel passar parametros para as funçoes do setInterval por meio de uma função anonima
     - setInterval(function() {myFunc("param1", "param2")}, 2000);
*/

let count = 0;

function ordenAvisos() {
    if (count == 7) {
        clearInterval(intervalos);
    }
    else {
        console.log(`O numero de avisos é de: ${count}`);
        count++;
    }
}

const intervalos = setInterval(ordenAvisos, 1000);
