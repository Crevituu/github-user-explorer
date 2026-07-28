# GitHub User Explorer

Aplicação web em **React.js** que consome a API pública do GitHub para buscar
usuários, exibir seus dados de perfil e navegar pelos seus repositórios
públicos.

## Funcionalidades

- Busca de usuários do GitHub por nome de usuário.
- Exibição dos dados do usuário: avatar, bio, e-mail (quando disponível),
  número de seguidores e de seguidos.
- Listagem de repositórios públicos, ordenada por estrelas (decrescente) por
  padrão, com opção de reordenar por: estrelas (crescente), nome (A-Z / Z-A)
  e data de atualização.
- Página de detalhes do repositório com nome, descrição, estrelas, linguagem
  principal e link externo para o GitHub.
- Estados de carregamento, erro e vazio tratados em toda a aplicação.
- Layout responsivo, com suporte a partir de 320x480px.

## Tecnologias

- [React](https://react.dev/) 18 com Hooks (sem componentes de classe)
- [Vite](https://vitejs.dev/) como bundler
- [React Router DOM](https://reactrouter.com/) v6 para as rotas
- [Tailwind CSS](https://tailwindcss.com/) para estilização
- [Context API](https://react.dev/reference/react/useContext) para o estado
  global (usuário buscado, repositórios e ordenação)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
  para os testes automatizados (equivalente moderno a Jest, já integrado
  nativamente ao Vite)
- Fonte [Montserrat](https://fonts.google.com/specimen/Montserrat) via Google
  Fonts

## Estrutura do projeto

```
src/
├── components/     # Componentes de UI reutilizáveis (SearchBar, UserCard, RepoList...)
├── context/        # Context API (estado global do usuário/repositórios)
├── hooks/          # Hooks customizados (ex: useRepoDetails)
├── pages/          # Páginas roteadas (Home, RepoDetails, NotFound)
├── router/         # Configuração das rotas (react-router-dom)
├── services/       # Camada de acesso à API do GitHub (fetch + tratamento de erros)
├── tests/          # Testes automatizados (Vitest + Testing Library)
├── utils/          # Funções puras utilitárias (ex: sortRepos)
├── App.jsx         # Layout raiz da aplicação
├── main.jsx        # Ponto de entrada (React + Router + Context)
└── index.css       # Estilos globais + Tailwind
```

## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (ou yarn/pnpm, se preferir)

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

### Build de produção

```bash
npm run build
npm run preview
```

### Testes

```bash
npm run test        # roda os testes uma vez
npm run test:watch  # roda os testes em modo watch
```

### Lint

```bash
npm run lint
```

## 🔍 Sobre o consumo da API

Todas as chamadas à API pública do GitHub (`https://api.github.com`) estão
centralizadas em `src/services/githubApi.js`, usando a Fetch API nativa e um
tratamento de erros padronizado (usuário/repositório não encontrado, limite
de requisições atingido, erros genéricos), evitando duplicação de lógica de
rede pelos componentes.

> A API pública do GitHub possui um limite de requisições por hora para
> chamadas não autenticadas. Se isso acontecer durante os testes manuais,
> aguarde alguns minutos e tente novamente.

## Decisões de arquitetura

- **Context API** foi escolhida para o estado global por ser nativa do React
  e suficiente para o escopo da aplicação (usuário buscado, repositórios e
  ordenação), evitando a complexidade adicional de uma lib externa.
- A ordenação dos repositórios é feita por uma função pura
  (`src/utils/sortRepos.js`), separada da camada de estado, o que facilita
  testes unitários e reaproveitamento.
- A página de detalhes do repositório (`/repo/:owner/:repoName`) busca seus
  próprios dados de forma independente do contexto global, para funcionar
  corretamente mesmo ao ser acessada diretamente pela URL (deep link).
