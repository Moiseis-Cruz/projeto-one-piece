const botoes = document.querySelectorAll(".botao");

const personagem = document.querySelectorAll(".personagem")

botoes.forEach((event, index) => {
  event.addEventListener("click", () => {

    desselecionarBotao();

    event.classList.add("selecionado")

    desselecionarPersonagem();

    personagem[index].classList.add("selecionado")
  });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");

    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");

    botaoSelecionado.classList.remove("selecionado");
}