# react-weather-app

Este é um projeto de previsão do tempo criado com React, Vite e a API WeatherAPI. Ele permite que os usuários consultem informações sobre as condições climáticas atuais em diferentes cidades ao redor do mundo.

## Requisitos

- Node.js
- npm ou yarn

## Instalação

1. Clone este repositório:

git clone https://github.com/mayconSR/react-weather-app.git

2. Acesse a pasta do projeto e instale as dependências:

cd react-weather-app
npm install

3. Crie um arquivo `.env` (ou `.env.development`) na raiz do projeto e adicione sua chave de API WeatherAPI:

VITE_WEATHER_API_KEY=sua_chave_de_api_aqui

Lembre-se de adicionar o arquivo `.env` ou `.env.development` ao seu arquivo `.gitignore` para evitar que informações sensíveis sejam expostas no controle de versão.

## Executando o projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

npm run dev

ou

yarn dev

O aplicativo estará disponível no http://localhost.

## Construindo para produção

Para construir o projeto para produção, execute o seguinte comando:

npm run build

ou

yarn build

Os arquivos construídos estarão disponíveis na pasta `dist`.

## Tecnologias utilizadas

- React
- Vite
- WeatherAPI

## Licença

Este projeto está licenciado sob a licença MIT.
