// Mostra ou esconde a caixa de FAQ
// Esta função é chamada quando o usuário clica no botão de FAQ.
// Ela alterna a classe "show" na caixa de FAQ, o que faz com que ela seja exibida ou escondida.
function toggleFAQ() {
  // Obtém o elemento da caixa de FAQ pelo ID "faqBox"
  // Alterna a classe "show" para mostrar ou esconder a caixa
  document.getElementById("faqBox").classList.toggle("show");
}

// Expande ou recolhe a resposta da pergunta clicada
// Esta função é chamada quando o usuário clica em um botão de pergunta.
// Ela alterna a classe "open" na resposta correspondente, o que faz com que ela seja exibida ou escondida.
function toggleItem(button) {
  // Obtém o elemento da resposta que está logo após o botão clicado
  const answer = button.nextElementSibling;
  // Alterna a classe "open" na resposta para mostrar ou esconder
  answer.classList.toggle("open");
}

// Fecha o FAQ ao clicar fora da caixa
// Adiciona um ouvinte de evento para o documento inteiro
// O evento 'mousedown' é disparado quando o usuário pressiona qualquer botão do mouse
// Isso permite detectar cliques em qualquer lugar da página
document.addEventListener("mousedown", function (event) {
  // Seleciona a caixa do FAQ pelo ID
  const faqBox = document.getElementById("faqBox");
  // Seleciona o botão de abrir FAQ pela classe
  const faqButton = document.querySelector(".faq-button");
  // Verifica se a caixa do FAQ está visível (classe 'show' presente)
  if (faqBox && faqBox.classList.contains("show")) {
    // Se o clique NÃO foi dentro da caixa do FAQ e nem no botão do FAQ
    if (!faqBox.contains(event.target) && !faqButton.contains(event.target)) {
      // Remove a classe 'show' para esconder a caixa do FAQ
      faqBox.classList.remove("show");
    }
  }
});
