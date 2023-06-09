// HTTP methods
// GET    - Buscar
// POST   - Criar
// PUT    - Atualizar   - Atualiza o recurso inteiro
// PATCH  - Atualizar/2 - Atualiza o recurso só que sem precisar passar todo os recursos
// DELETE - Deletar

const response = fetch("https://jsonplaceholder.typicode.com/posts")

console.log(response);