function validacao() {
  let email = formLogin.email.value;
  let password = formLogin.password.value;

  if (email.trim() === "") {
    $("#input-email").notify("Insira seu E-mail", {
      style: "custom-error",
      className: "error",
      autoHide: true,
      autoHideDelay: 3000,
    });
    formLogin.email.focus();
    return false;
  } else if (password.trim() === "") {
    $("#input-password").notify("Insira sua Senha", {
      style: "custom-error",
      className: "error",
      autoHide: true,
      autoHideDelay: 3000,
    });
    formLogin.password.focus();
    return false;
  } else if (email.trim() === "joao@gmail.com" && password.trim() === "1") {
    $.notify("Login Realizado com Sucesso!", {
      style: "custom-success",
      className: "success",
      autoHide: true,
      autoHideDelay: 2000,
    });
  }
}

$.notify.addStyle("custom-error", {
  html: `
    <div>
      <i class="fas fa-exclamation-circle" style="margin-right: 10px;"></i>
      <span data-notify-text/>
    </div>
  `,
  classes: {
    error: {
      "background-color": "#FCF8E3",
      "color": "#C29853",
      "padding": "7px 15px",
      "border-radius": "4px",
      "font-weight": "bold",
      "display": "flex",
      "align-items": "center",
      "width": "180px",
    },
  },
});

$.notify.addStyle("custom-success", {
  html: `
    <div>
      <i class="fas fa-check-circle"></i>
      <span data-notify-text/>
    </div>
    `,
  classes: {
    success: {
      "position": "fixed",
      "top": "5%",
      "left": "50%",
      "transform": "translate(-50%, 0%)", // Para centralizar
      "background": "#c4ffb8",
      "color": "#209c1e",
      "font-size": "20px",
      "font-weight": "bold",
      "border-radius": "8px",
      "text-align": "center",
      "gap": "10px",
      "display": "flex",
      "align-items": "center",
      "justify-content": "center",
      "z-index": "9999",
      "width": "400px",
      "height": "50px",
      "animation": "cairNotificacao 0.5s ease-out",
    },
  },
});

let btn = document.querySelector("#toggle-password");

btn.addEventListener("click", function () {
  let input = document.querySelector("#input-password");

  if (input.type === "password") {
    // Mostrar senha
    input.type = "text";
    btn.classList.remove("fa-eye-slash");
    btn.classList.add("fa-eye");
  } else {
    // Esconder senha
    input.type = "password";
    btn.classList.remove("fa-eye");
    btn.classList.add("fa-eye-slash");
  }
});
