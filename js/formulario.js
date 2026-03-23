function validacao() {
  let email = formLogin.email.value;
  let password = formLogin.password.value;

  if (email.trim() === "") {
    $("#input-email").notify("Insira seu E-mail", {
      style: "custom-alert",
      className: "alertEmail",
      autoHide: true,
      autoHideDelay: 2000,
    });
    return false;
  } else if (email.trim() !== "joao@gmail.com") {
    $("#input-email").notify("E-mail Inválido", {
      style: "custom-warn",
      className: "warnEmail",
      autoHide: true,
      autoHideDelay: 2000,
    });
    return false;
  } else if (password.trim() === "") {
    $("#input-password").notify("Insira sua Senha", {
      style: "custom-alert",
      className: "alertPassword",
      autoHide: true,
      autoHideDelay: 2000,
    });
    return false;
  } else if (password.trim() !== "12345678") {
    $("#input-password").notify("Senha Inválida", {
      style: "custom-warn",
      className: "warnPassword",
      autoHide: true,
      autoHideDelay: 2000,
    });
    if (password.length < 8) {
      $("#input-password").notify(
        "A senha deve conter no mínimo 8 caracteres",
        {
          style: "custom-alert",
          className: "alertSizePassword",
          autoHide: true,
          autoHideDelay: 2000,
        },
      );
    }
    return false;
  } else if (
    email.trim() === "joao@gmail.com" &&
    password.trim() === "12345678"
  ) {
    $.notify("Login Realizado com Sucesso!", {
      style: "custom-success",
      className: "success",
      autoHide: true,
      autoHideDelay: 2000,
    });
    $("#input-email").val("");
    $("#input-password").val("");
    $("#remember-me").prop("checked", false);
    return false;
  }
}

$.notify.addStyle("custom-alert", {
  html: `
    <div>
      <i class="fas fa-exclamation-circle" style="margin-right: 10px;"></i>
      <span data-notify-text/>
    </div>
  `,
  classes: {
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
    alertSizePassword: {
      "background-color": "#FCF8E3",
      color: "#C29853",
      padding: "7px 15px",
      "border-radius": "4px",
      "font-weight": "bold",
      display: "flex",
      "align-items": "center",
      "font-size": "14px",
      width: "350px",
    },
  },
});

$.notify.addStyle("custom-warn", {
  html: `
    <div>
      <i class="fas fa-exclamation-triangle"></i>
      <span data-notify-text/>
    </div>
    `,
  classes: {
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
  html: `
    <div>
      <i class="fas fa-check-circle"></i>
      <span data-notify-text/>
    </div>
    `,
  classes: {
    success: {
      position: "fixed",
      top: "5%",
      left: "50%",
      transform: "translate(-50%, 0%)", // Para centralizar
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
      "z-index": "9999",
      width: "400px",
      height: "50px",
      animation: "cairNotificacao 0.5s ease-out",
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
