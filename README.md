# Pizza Shop API

Pizza Shop é uma aplicação de **gerenciamento de pedidos para restaurantes**

Este projeto foi criado utilizando `pnpm create vite --template react-ts` com [Vite](https://bun.sh) na versão 5.2.0.

Você encontra o back-end deste projeto [aqui](https://github.com/JoaoGuiBC/pizza-shop-api)

### Etapas para executar a aplicação

Copie o conteúdo de `.env.local.example` para dentro de `.env.local` e preencha os valores das chaves:

>VITE_API_URL: URL onde a API está rodando. Por padrão está o localhost na porta 3333

>VITE_ENABLE_API_DELAY: Caso esteja como true será adicionado um delay aleatório entre 1 e 3 segundos para todas as requisições feitas para a API. Usado para teste. Por padrão está false

Instale as dependências:
```bash
pnpm install
```

Execute a aplicação:
```bash
pnpm dev
```
*Por padrão, aplicações Vite rodam na porta 5173*
