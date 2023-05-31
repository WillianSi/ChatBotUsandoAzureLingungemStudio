// URL do ponto de extremidade personalizado fornecido pelo Language Studio
const url = "Ponto_de_extremidade_personalizado";

// Chave de assinatura fornecida pelo Language Studio
const subscription_key = "sua_chave_API";

// Referências aos elementos da interface do usuário
const messageList = document.querySelector("#message-list");
const messageInput = document.querySelector("#message-input");
const sendButton = document.querySelector("#send-button");
const clearButton = document.querySelector("#clear-button");

// Função que envia a pergunta para o endpoint personalizado e exibe a resposta na interface do usuário
async function sendMessage() {
  // Verifica se já há uma pergunta sendo processada
  if (messageInput.disabled) {
    return;
  }

  // Obtém a pergunta digitada pelo usuário
  const question = messageInput.value;

  // Verifica se a pergunta não está vazia
  if (question.trim().length === 0) {
    return;
  }

  // Desabilita o campo de entrada e o botão de envio
  disableInput();

  // Limpa o campo de entrada
  messageInput.value = "";

  // Exibe a pergunta na interface do usuário
  const questionItem = document.createElement("li");
  questionItem.textContent = question;
  questionItem.classList.add("sent");
  questionItem.classList.add("chatbox__entrada"); // Adiciona a classe CSS "chatbox__message"
  messageList.appendChild(questionItem);

  // Parâmetros da solicitação HTTP
  const headers = {
    "Ocp-Apim-Subscription-Key": subscription_key,
    "Content-Type": "application/json",
  };
  const payload = {
    question: question,
  };

  // Envia a solicitação HTTP para o ponto de extremidade personalizado
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload),
  });

  // Analisa a resposta JSON
  const responseJson = await response.json();
  const answer = responseJson.answers[0].answer;

  // Exibe a resposta na interface do usuário
  const messageItem = document.createElement("li");
  messageItem.textContent = answer;
  messageItem.classList.add("received");
  messageItem.classList.add("chatbox__message"); // Adiciona a classe CSS "chatbox__message"
  messageList.appendChild(messageItem);

  // Habilita o campo de entrada e o botão de envio novamente
  enableInput();

  // Rola para o final após enviar a mensagem
  scrollToBottom();

  // Deixa a caixa de texto selecionada
  messageInput.focus();
}

// Função que desabilita o campo de entrada e o botão de envio
function disableInput() {
  messageInput.disabled = true;
  sendButton.disabled = true;
  sendButton.innerHTML =
    '<img src="/img/load.gif" alt="" style="width: 16px; height: 16px;">'; // Altera a imagem do botão para "/img/load.gif"
}

// Função que habilita o campo de entrada e o botão de envio
function enableInput() {
  messageInput.disabled = false;
  sendButton.disabled = false;
  sendButton.innerHTML = '<img src="/img/enviar.png" alt="">'; // Altera a imagem do botão para "/img/load.gif"
}

// Função para rolar para o final da div de mensagens
function scrollToBottom() {
  messageList.scrollTop = messageList.scrollHeight;
}

// Função para limpar a interface do usuário
function clearUI() {
  // Remove todos os elementos da lista de mensagens
  while (messageList.firstChild) {
    messageList.firstChild.remove();
  }
}

// Adiciona um evento de clique ao botão "Limpar"
clearButton.addEventListener("click", clearUI);

// Adiciona um evento de clique ao botão "Enviar"
sendButton.addEventListener("click", sendMessage);

// Adiciona um evento de tecla ao campo de entrada
messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});