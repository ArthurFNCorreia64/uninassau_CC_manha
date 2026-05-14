//1. pega os elementos pelo id
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const lista = document.getElementById('lista');

//função para adcionar tarefa
function adicionarTarefa() {
//2. pega o valor do input
    const texto = input.value.trim();
//3. verifica se o texto não é vazio
    if (texto === "") return;
//4. cria um elemento li
    const li = document.createElement('li');
//5. adiciona o texto ao li
    li.textContent = texto;
//6. marcar como concluida
    li.addEventListener('click', () => {
        li.classList.toggle('feito');
    });
//7. adicionar o li a lista
    lista.appendChild(li);
//8. limpar o input
    input.value = "";
//9. focar no input
    input.focus();
}
//10. adicionar evento de click ao botão
btn.addEventListener('click', adicionarTarefa);
//11. adicionar evento de keydown ao input (keydown é um evento que ocorre quando uma tecla é pressionada)
    input.addEventListener('keydown', (e) => {
//12. verifica se a tecla pressionada é enter
        if (e.key === 'Enter') {
//13. chama a função para adicionar tarefa
            adicionarTarefa();
    }
});