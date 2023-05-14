
// POST para enviar informações para o BD
const form = document.getElementById('meuFormulario');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const url = 'http://127.0.0.1:3000/pedido/add';
  const data = {
    name: (form.name.value),
    pedido: (form.pedido.value)
  };

  form.name.value = '';
  form.pedido.value = '';

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

});


// GET para receber as informações do BD
function searchPedidos() {

  const tabela = document.getElementById('minha-tabela');
  const tbody = tabela.querySelector('tbody');

  // faz a requisição HTTP à API e processa os dados recebidos
  fetch('http://127.0.0.1:3000/pedido/')
    .then(response => response.json())
    .then(pedido => {
      console.log(pedido);
      
    })
    .catch(error => console.error(error));
}



