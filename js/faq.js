// Mostra ou esconde a caixa de FAQ
function toggleFAQ() {
  document.getElementById("faqBox").classList.toggle("show");
}

// Expande ou recolhe a resposta da pergunta clicada
function toggleItem(button) {
  const answer = button.nextElementSibling;
  answer.classList.toggle("open");
}
