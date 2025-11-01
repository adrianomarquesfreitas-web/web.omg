document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("volunteerForm");
  const resultado = document.getElementById("resultado");

  function onlyDigits(value) {
    return value.replace(/\D/g, "");
  }

  function maskCPF(value) {
    value = onlyDigits(value).slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value;
  }

  function maskCEP(value) {
    value = onlyDigits(value).slice(0, 8);
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value;
  }

  function maskPhone(value) {
    value = onlyDigits(value).slice(0, 11);
    if (value.length > 10) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d+)/, "($1) $2");
    } else if (value.length > 0) {
      value = value.replace(/(\d+)/, "($1");
    }
    return value;
  }

  const cpfInput = document.getElementById("cpf");
  const cepInput = document.getElementById("cep");
  const telInput = document.getElementById("telefone");

  if (cpfInput) {
    cpfInput.addEventListener("input", function (e) {
      e.target.value = maskCPF(e.target.value);
    });
  }

  if (cepInput) {
    cepInput.addEventListener("input", function (e) {
      e.target.value = maskCEP(e.target.value);
    });
  }

  if (telInput) {
    telInput.addEventListener("input", function (e) {
      e.target.value = maskPhone(e.target.value);
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão

    resultado.textContent = "Cadastro enviado com sucesso!";
    form.reset(); // Limpa os campos do formulário

    // Remove a mensagem após 5 segundos
    setTimeout(() => {
      resultado.textContent = "";
    }, 5000);
  });
});

const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      // Função para mostrar ou esconder o botão conforme o tamanho da tela
function controlarMenuToggle() {
  const botao = document.getElementById("menu-toggle");

  if (window.innerWidth <= 768) {
    botao.style.display = "block"; // mostra em dispositivos móveis
  } else {
    botao.style.display = "none"; // esconde em telas grandes
  }
}

// Executa assim que a página carregar
window.addEventListener("load", controlarMenuToggle);

// Executa novamente quando a tela for redimensionada
window.addEventListener("resize", controlarMenuToggle);

// --- Lógica do menu lateral móvel ---
const menuButton = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

    });

    