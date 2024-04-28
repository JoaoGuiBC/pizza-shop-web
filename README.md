# Pizza Shop WEB

Pizza Shop é uma aplicação de **gerenciamento de pedidos para restaurantes**

Este projeto foi criado utilizando `pnpm create vite --template react-ts` com [Vite](https://bun.sh) na versão 5.2.0.

Você encontra o back-end deste projeto [aqui](https://github.com/JoaoGuiBC/pizza-shop-api)

***

### Executar a aplicação

Copie o conteúdo de `.env.local.example` para dentro de `.env.local` e preencha os valores das chaves:

>VITE_API_URL: URL onde a API está rodando. Por padrão está o localhost na porta 3333

>VITE_ENABLE_API_DELAY: Caso esteja como true será adicionado um delay aleatório entre 1 e 3 segundos para todas as requisições feitas para a API. Usado para teste. Por padrão está false  

Instale as dependências:
```bash
pnpm  install
```

Execute a aplicação:
```bash
pnpm  dev
```

*Por padrão, aplicações Vite rodam na porta 5173*

Caso deseje apenas acessar a estrutura visual, é possível executar a aplicação utilizando mocks ao invés de uma API. Ao invés do comando anterior, execute a aplicação através do seguinte comando:
```bash
pnpm dev:mock
``` 

*Essa aplicação estará rodando na porta 50789*

**Em razão dos testes, algumas rotas de mock retornarão erro se não receberem valores especificos. Ao atulizar o perfil, o nome do estbelecimento de ser *'Food Shop'*. O login deve ser feito com o e-mail *'admin@admin.com'*. Ao registrar um novo estabeliecimento o nome deve ser *'Pizza Shop'*.**

***

### Testes

É possível testar os principais componentes do Pizz Shop traves de unit tests e testar a aplicação como um todo atraves de testes E2E.
Para rodar os unit tests execute o seguinte comando:
```bash
pnpm test
```

Para rodar os teste E2E execute o seguinte comando:
```bash
pnpm e2e
```
Caso queira visualizar os testes E2E através da interface do Playwright o comando que deve ser executado é:
```bash
pnpm e2e:ui
```