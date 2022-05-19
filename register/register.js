var msgAlert = document.querySelector(".msgAlert");

function Validar() {
  const pass1 = document.querySelector(".pass1").value;

  var letrasMaiusculas = /[A-Z]/;
  var letrasMinusculas = /[a-z]/;
  var numeros = /[0-9]/;
  var caractEspeciais = /[!|@|#|$|%|^|&|*]/;

  if (
    letrasMaiusculas.test(pass1) &&
    letrasMinusculas.test(pass1) &&
    numeros.test(pass1) &&
    caractEspeciais.test(pass1) &&
    pass1.length >= 8
  ) {
    validarConfirmação();
  } else {
    function alert1() {
      msgAlert.textContent =
        "Sua senha deve conter no mínimo 8 caractéres e deve ser composta por números, caracteres especiais e letras maiúsculas e minúsculas.";
    }
    alert1();
    openAlert();
  }
}

function validarConfirmação() {
  const pass1 = document.querySelector(".pass1").value;
  const pass2 = document.querySelector(".pass2").value;

  if (pass1 === pass2) {
    function alert2() {
      msgAlert.textContent = "Sua senha foi confirmada com sucesso!";
    }
    alert2();
    openAlert();
  } else {
    function alert3() {
      msgAlert.textContent = "As senhas devem coincidir.";
    }
    alert3();
    openAlert();
  }
}

const alert = document.querySelector(".alert");
const container = document.querySelector(".container");

function openAlert() {
  alert.classList.add("active");
  container.classList.add("alertOn");
}

function closeAlert() {
  alert.classList.remove("active");
  container.classList.remove("alertOn");
}
