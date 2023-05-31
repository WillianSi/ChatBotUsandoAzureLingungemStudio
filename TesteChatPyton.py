import requests
import json
from pprint import pprint

# URL do ponto de extremidade personalizado fornecido pelo Language Studio
url = "URL do ponto de extremidade"

# Chave de assinatura fornecida pelo Language Studio
subscription_key = "sua_chave_API"

while True:
    # Pergunta que queremos fazer à base de conhecimento
    question = input("Digite sua pergunta (ou digite 'sair' para encerrar): ")

    if question.lower() == "sair":
        break  # Sai do loop se a palavra "sair" for digitada

    # Parâmetros da solicitação HTTP
    headers = {
        "Ocp-Apim-Subscription-Key": subscription_key,
        "Content-Type": "application/json"
    }
    payload = {
        "question": question
    }

    # Envia a solicitação HTTP para o ponto de extremidade personalizado
    response = requests.post(url, headers=headers, data=json.dumps(payload))

    # Analisa a resposta JSON e imprime a resposta à pergunta
    response_json = json.loads(response.text)
    ##pprint(response_json)
    answer = response_json["answers"][0]["answer"]
    print("Resposta: " + answer)