let num = 7;

function teste(num) {
  if (num < 8) {
    throw "Numero invalido"
  }
  return "tudo certo"
}

try {
    teste(num)
} catch (err) {
    console.error("Um erro detectado:", err);
} finally {
    console.log("Finalizando operação...")
}