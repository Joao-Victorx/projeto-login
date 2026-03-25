function validacao() {
  // Pega os valores dos inputs do formulário
  let email = formLogin.email.value;
  let password = formLogin.password.value;

  // Verifica se o email está vazio
  if (email.trim() === "") {
    $("#input-email").notify("Insira seu E-mail", {
      style: "custom-alert", // estilo de alerta (amarelo)
      className: "alertEmail", // classe específica do CSS
      autoHide: true, // some automaticamente
      autoHideDelay: 2000, // tempo para sumir (2s)
    });
    return false; // impede envio do formulário
  }

  // Verifica se o email é diferente do esperado
  else if (email.trim() !== "joao@gmail.com") {
    $("#input-email").notify("E-mail Inválido", {
      style: "custom-warn", // estilo de erro (vermelho)
      className: "warnEmail",
      autoHide: true,
      autoHideDelay: 2000,
    });
    return false;
  }

  // Verifica se a senha está vazia
  else if (password.trim() === "") {
    $("#input-password").notify("Insira sua Senha", {
      style: "custom-alert",
      className: "alertPassword",
      autoHide: true,
      autoHideDelay: 2000,
    });
    return false;
  }

  // Verifica se a senha está incorreta
  else if (password.trim() !== "12345678") {
    $("#input-password").notify("Senha Inválida", {
      style: "custom-warn",
      className: "warnPassword",
      autoHide: true,
      autoHideDelay: 2000,
    });

    // Verifica tamanho mínimo da senha
    if (password.length < 8) {
      $("#input-password").notify("Mínimo 8 Caracteres", {
        style: "custom-alert",
        className: "alertSizePassword",
        autoHide: true,
        autoHideDelay: 2000,
      });
    }

    return false;
  }

  // Caso email e senha estejam corretos
  else if (
    email.trim() === "joao@gmail.com" &&
    password.trim() === "12345678"
  ) {
    $.notify("Login Realizado com Sucesso!", {
      style: "custom-success", // estilo de sucesso (verde)
      className: "success",
      autoHide: true,
      autoHideDelay: 2000,
    });

    // Limpa os campos após login
    $("#input-email").val("");
    $("#input-password").val("");
    $("#remember-me").prop("checked", false); // desmarca checkbox

    return false;
  }
}

$.notify.addStyle("custom-alert", {
  // Ícone de alerta
  html: `
    <div>
      <i class="fas fa-exclamation-circle" style="margin-right: 10px;"></i>
      <span data-notify-text/>
    </div>
  `,
  classes: {
    // Estilo para inserir o email
    alertEmail: {
      "background-color": "#FCF8E3",
      color: "#C29853",
      padding: "7px 15px",
      "border-radius": "4px",
      "font-weight": "bold",
      display: "flex",
      "align-items": "center",
      "font-size": "14px",
      width: "170px",
    },
    // Estilo para inserir a senha
    alertPassword: {
      "background-color": "#FCF8E3",
      color: "#C29853",
      padding: "7px 15px",
      "border-radius": "4px",
      "font-weight": "bold",
      display: "flex",
      "align-items": "center",
      "font-size": "14px",
      width: "170px",
    },
    // Estilo para informar que a senha deve ter 8 caracteres
    alertSizePassword: {
      "background-color": "#FCF8E3",
      color: "#C29853",
      padding: "7px 15px",
      "border-radius": "4px",
      "font-weight": "bold",
      display: "flex",
      "align-items": "center",
      "font-size": "14px",
      width: "200px",
    },
  },
});

$.notify.addStyle("custom-warn", {
  // Ícone de aviso
  html: `
    <div>
      <i class="fas fa-exclamation-triangle"></i>
      <span data-notify-text/>
    </div>
    `,
  classes: {
    // Estilo para email inválido
    warnEmail: {
      "background-color": "#FEE2E2",
      color: "#991B1B",
      padding: "7px 15px",
      "border-radius": "4px",
      "font-weight": "bold",
      display: "flex",
      "align-items": "center",
      "font-size": "14px",
      width: "170px",
      gap: "10px",
    },
    // Estilo para senha inválida
    warnPassword: {
      "background-color": "#FEE2E2",
      color: "#991B1B",
      padding: "7px 15px",
      "border-radius": "4px",
      "font-weight": "bold",
      display: "flex",
      "align-items": "center",
      "font-size": "14px",
      width: "170px",
      gap: "10px",
    },
  },
});

$.notify.addStyle("custom-success", {
  // Ícone de sucesso
  html: `
    <div>
      <i class="fas fa-check-circle"></i>
      <span data-notify-text/>
    </div>
    `,
  classes: {
    // Estilo para login realizado com sucesso
    success: {
      position: "fixed", // fixa na tela
      top: "5%",
      left: "50%",
      transform: "translate(-50%, 0%)", // para centralizar horizontalmente
      background: "#c4ffb8",
      color: "#209c1e",
      "font-size": "20px",
      "font-weight": "bold",
      "border-radius": "8px",
      "text-align": "center",
      gap: "10px",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      "z-index": "9999", // fica acima de tudo
      width: "400px",
      height: "50px",
      animation: "cairNotificacao 0.5s ease-out", // animação CSS
    },
  },
});

// Seleciona o botão (ícone de olho)
let btn = document.querySelector("#toggle-password");

// Evento de clique
btn.addEventListener("click", function () {
  let input = document.querySelector("#input-password");

  // Se estiver escondido
  if (input.type === "password") {
    input.type = "text"; // mostra senha
    btn.classList.remove("fa-eye-slash");
    btn.classList.add("fa-eye");
  } else {
    // Se estiver visível
    input.type = "password"; // esconde senha
    btn.classList.remove("fa-eye");
    btn.classList.add("fa-eye-slash");
  }
});
