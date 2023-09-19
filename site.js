// Função para iniciar o jogo
function iniciarJogo() {
    // Obter o nome digitado pelo jogador
    const nomeJogador = document.getElementById("nome-jogador").value;

    // Verificar se o nome foi digitado
    if (nomeJogador.trim() === "") {
        alert("Por favor, digite seu nome antes de iniciar o jogo.");
        return;
    }

    // Esconder a tela inicial
    document.getElementById("tela-inicial").style.display = "none";

    // Exibir a tela de confirmação com o nome do jogador
    document.getElementById("tela-confirmacao").style.display = "block";
    document.getElementById("nome-confirmacao").textContent = nomeJogador;

    // Armazenar o nome do jogador na sessão
    sessionStorage.setItem("nomeJogador", nomeJogador);
}
