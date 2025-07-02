// agendamento.js

const mesAnoEl = document.getElementById("mesAno");
const diasContainer = document.getElementById("dias-container");

let hoje = new Date();
let mesAtual = hoje.getMonth();
let anoAtual = hoje.getFullYear();

const nomesMeses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function renderizarCalendario() {
  const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();
  const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
  const hojeDia = new Date();

  diasContainer.innerHTML = "";
  mesAnoEl.textContent = `${nomesMeses[mesAtual]} ${anoAtual}`;

  for (let i = 0; i < primeiroDia; i++) {
    const vazio = document.createElement("div");
    diasContainer.appendChild(vazio);
  }

  for (let dia = 1; dia <= diasNoMes; dia++) {
    const diaEl = document.createElement("div");
    diaEl.classList.add("dia");
    diaEl.textContent = dia;

    if (
      dia === hojeDia.getDate() &&
      mesAtual === hojeDia.getMonth() &&
      anoAtual === hojeDia.getFullYear()
    ) {
      diaEl.classList.add("hoje");
    }

    diaEl.onclick = () => {
      alert(`Você selecionou: ${dia}/${mesAtual + 1}/${anoAtual}`);
    };

    diasContainer.appendChild(diaEl);
  }
}

function mudarMes(direcao) {
  mesAtual += direcao;
  if (mesAtual < 0) {
    mesAtual = 11;
    anoAtual--;
  } else if (mesAtual > 11) {
    mesAtual = 0;
    anoAtual++;
  }
  renderizarCalendario();
}

renderizarCalendario();
function confirmarAgendamento() {
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  if (data && hora) {
    // Aqui você pode salvar os dados ou enviar para backend
    console.log(`Serviço agendado para ${data} às ${hora}`);

    // Redirecionar para página de pagamento
    window.location.href = "pagamento.html";
  } else {
    alert("Por favor, escolha uma data e horário antes de confirmar.");
  }
}

function confirmarAgendamento() {
  const horario = document.getElementById('hora').value;

  if (horario) {
    alert(`Agendamento confirmado para o horário ${horario}. Agora vamos para o pagamento!`);
    window.location.href = "pagamento.html";
  } else {
    alert("Por favor, selecione um horário antes de confirmar.");
  }
}



// carrinho.js

// Exemplo de produtos no carrinho
let carrinho = [
  {
    id: 1,
    nome: "Unha Blue Dimond",
    preco: 98.00,
    imagem: "./imagens/unhabluedimond.png"
  },
  {
    id: 2,
    nome: "Unha Black Glam",
    preco: 85.00,
    imagem: "./imagens/unhablackglam.png"
  }
];

function renderizarCarrinho() {
  const container = document.getElementById("itens-carrinho");
  const totalEl = document.getElementById("total");
  container.innerHTML = "";

  let total = 0;

  carrinho.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("item-carrinho");

    div.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">
      <div class="info-item">
        <h3>${item.nome}</h3>
        <p class="preco">R$ ${item.preco.toFixed(2)}</p>
      </div>
      <button class="btn-remover" onclick="removerItem(${index})">Remover</button>
    `;

    container.appendChild(div);
    total += item.preco;
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removerItem(index) {
  carrinho.splice(index, 1);
  renderizarCarrinho();
}

document.addEventListener("DOMContentLoaded", renderizarCarrinho);
