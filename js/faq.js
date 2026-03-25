// Alterna a visibilidade da caixa de FAQ
// Adiciona/remove a classe "show" no elemento #faqBox
function toggleFAQ() {
  document.getElementById("faqBox").classList.toggle("show");
}

// Expande ou recolhe um item específico do FAQ
// Recebe o botão clicado e atua na resposta logo abaixo dele
function toggleItem(button) {
  // nextElementSibling pega o próximo elemento irmão (a resposta)
  const answer = button.nextElementSibling;

  // Alterna a classe "open" para mostrar/esconder a resposta
  answer.classList.toggle("open");
}

// Fecha o FAQ ao clicar fora dele
// Listener global para detectar cliques em qualquer área da página
document.addEventListener("mousedown", function (event) {
  // Seleciona a caixa do FAQ
  const faqBox = document.getElementById("faqBox");

  // Seleciona o botão que abre o FAQ
  const faqButton = document.querySelector(".faq-button");

  // Verifica se o FAQ existe e está visível (tem a classe "show")
  if (faqBox && faqBox.classList.contains("show")) {
    // Verifica se o clique foi FORA:
    // - da caixa do FAQ
    // - do botão que abre o FAQ
    if (!faqBox.contains(event.target) && !faqButton.contains(event.target)) {
      // Remove a classe para fechar o FAQ
      faqBox.classList.remove("show");
    }
  }
});
