# ChatBot utilizando Azure Language Studio
<p>Este é um projeto de exemplo de um ChatBot utilizando o Azure Language Studio. O ChatBot permite que os usuários façam perguntas e recebam respostas com base em uma base de conhecimento fornecida pelo Azure Language Studio.</p>

   <h2>Configuração</h2>
   <p>Antes de executar o ChatBot, é necessário configurar o URL do ponto de extremidade personalizado e a chave de assinatura fornecida pelo Azure Language Studio. Siga as instruções abaixo para configurar o arquivo index.js e o script Python chatbot.py:</p>

   <h3>No arquivo index.js:</h3>
   <pre><code>const url = "Ponto_de_extremidade_personalizado";</code></pre>
   <pre><code>const subscription_key = "sua_chave_API";</code></pre>

   <h3>No script Python chatbot.py:</h3>
   <pre><code>url = "URL do ponto de extremidade";</code></pre>
   <pre><code>subscription_key = "sua_chave_API";</code></pre>

   <h2>Utilização</h2>
   <h3>Executando o ChatBot no navegador</h3>
    <ol>
        <li>Abra o arquivo index.html em um navegador web.</li>
        <li>Digite uma pergunta no campo de entrada e clique no botão "Enviar" ou pressione a tecla Enter.</li>
        <li>O ChatBot enviará a pergunta para o ponto de extremidade personalizado do Azure Language Studio e exibirá a resposta na interface do usuário.</li>
    </ol>

   <h3>Executando o ChatBot no Python</h3>
    <ol>
        <li>Certifique-se de ter o Python instalado em seu sistema.</li>
        <li>Abra o arquivo chatbot.py em um editor de texto ou IDE.</li>
        <li>Execute o script Python no terminal ou prompt de comando.</li>
        <li>Digite uma pergunta quando solicitado e pressione Enter.</li>
        <li>O ChatBot enviará a pergunta para o ponto de extremidade personalizado do Azure Language Studio e exibirá a resposta no terminal ou prompt de comando.</li>
    </ol>

   <h2>Observações</h2>
    <ul>
        <li>Certifique-se de ter uma conexão de internet ativa para que o ChatBot possa se comunicar com o Azure Language Studio.</li>
        <li>O ChatBot enviará a pergunta para o Azure Language Studio e exibirá apenas a primeira resposta retornada.</li>
        <li>Para encerrar o ChatBot no script Python, digite "sair" quando solicitado.</li>
        <li>Este é um exemplo básico de implementação de um ChatBot utilizando o Azure Language Studio. Você pode personalizar e aprimorar o ChatBot de acordo com suas necessidades.</li>
    </ul>

   <p>Espero que este readme seja útil!</p>
