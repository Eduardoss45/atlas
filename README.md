# Atlas

Este projeto é uma aplicação full stack que fornece informações sobre países, incluindo clima, fuso horário, indicadores econômicos, imagens e um resumo da Wikipédia. Ele é composto por um backend (Node.js com Express) e um frontend (Next.js).

## Estrutura do Projeto

* `backend/`: Contém o servidor Node.js com Express.
* `frontend/`: Contém a aplicação Next.js.

## Primeiros Passos

### Pré-requisitos

Antes de executar a aplicação, certifique-se de ter instalado:

* Node.js (versão LTS recomendada)
* npm ou yarn

### Configuração do Backend

1. Acesse o diretório `backend`:

   ```bash
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` dentro do diretório `backend` contendo suas chaves de API:

   ```
   TZ_API_KEY=YOUR_TIMEZONEDB_API_KEY
   IP_API_KEY=YOUR_IPINFO_API_KEY
   PEXELS_API_KEY=YOUR_PEXELS_API_KEY
   ```

   * **Chave da TimezoneDB:** Obtenha em [https://timezonedb.com](https://timezonedb.com)
   * **Chave da IPinfo:** Obtenha em [https://ipinfo.io](https://ipinfo.io)
   * **Chave da Pexels:** Obtenha em [https://www.pexels.com/api](https://www.pexels.com/api)

4. Inicie o servidor backend:

   ```bash
   npm run dev
   ```

   O backend rodará em `http://localhost:3001`.

### Configuração do Frontend

1. Acesse o diretório `frontend`:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   O frontend rodará em `http://localhost:3000`.

## Endpoints da API (Backend)

* `GET /info/:pais`: Retorna informações completas sobre um país específico.
  Substitua `:pais` pelo nome do país em português (ex.: `/info/Brasil`).

## Tecnologias Utilizadas

### Backend

* Node.js
* Express.js
* `cors`
* `dotenv`
* `node-fetch`
* `nodemon` (para desenvolvimento)

### Frontend

* Next.js
* React
* Tailwind CSS
* `@radix-ui/react-dialog`
* `class-variance-authority`
* `clsx`
* `cmdk`
* `lucide-react`
* `recharts`
* `tailwind-merge`
* TypeScript
* ESLint
* PostCSS
* Autoprefixer

## Contribuição

Sinta-se à vontade para contribuir com o projeto abrindo issues ou enviando pull requests.
