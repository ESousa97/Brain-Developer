<div align="center">

# Brain Developer

[![CI](https://img.shields.io/github/actions/workflow/status/ESousa97/Brain-Developer/ci.yml?style=flat&logo=github-actions&logoColor=white)](https://github.com/ESousa97/Brain-Developer/actions/workflows/ci.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/ESousa97/Brain-Developer/codeql.yml?style=flat&logo=github-actions&logoColor=white&label=CodeQL)](https://github.com/ESousa97/Brain-Developer/actions/workflows/codeql.yml)
[![CodeFactor](https://img.shields.io/codefactor/grade/github/ESousa97/Brain-Developer?style=flat&logo=codefactor&logoColor=white)](https://www.codefactor.io/repository/github/esousa97/brain-developer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&logo=opensourceinitiative&logoColor=white)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Archived-lightgrey.svg?style=flat&logo=archive&logoColor=white)](#)

**Plataforma educacional sobre carreiras em programação — roteiros estruturados para Início, Front-End, Back-End e Full-Stack com HTML/CSS puros, design system modular e paletas temáticas por trilha.**

[Demo](https://braindeveloper.vercel.app/)

</div>

---

> **⚠️ Projeto Arquivado**
> Este projeto não recebe mais atualizações ou correções. O código permanece disponível como referência e pode ser utilizado livremente sob a licença MIT. Fique à vontade para fazer fork caso deseje continuar o desenvolvimento.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Arquitetura](#arquitetura)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Uso Local](#uso-local)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Qualidade e Governança](#qualidade-e-governança)
- [Deploy](#deploy)
- [FAQ](#faq)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre o Projeto

Este projeto é uma plataforma educacional estática que oferece roteiros estruturados para carreiras em desenvolvimento de software. Desenvolvida com HTML5 e CSS3 puros, apresenta trilhas de aprendizado para Início na Programação, Front-End, Back-End e Full-Stack, cada uma com conteúdo curado, roadmaps progressivos e identidade visual própria.

O repositório prioriza:

- **Roteiros de carreira estruturados** — Trilhas com conceitos, tecnologias e habilidades organizadas por nível (Essencial, Importante, Avançado)
- **Design system modular** — Tokens, base, layout, componentes e estilos por página em `styles/`
- **Paletas temáticas por trilha** — Variáveis CSS distintas para cada caminho, reforçando identidade visual
- **Zero dependências de runtime** — HTML e CSS puros com Google Fonts e Font Awesome via CDN
- **Tipografia e iconografia** — Fonte Inter para legibilidade e Font Awesome para reforço visual de conceitos
- **Animações e efeitos** — `slideInDown`, `fadeIn`, hover effects e backgrounds animados

### Por que HTML/CSS puro?

Para um guia informativo estático, frameworks adicionariam complexidade sem benefícios proporcionais. A abordagem purista garante tempos de carregamento mínimos via CDN, máxima compatibilidade cross-browser e código acessível para novos contribuidores — alinhado ao propósito educacional do projeto.

---

## Funcionalidades

- **Página principal (Hub)** — Cartões de navegação interativos para cada trilha com ícones, descrições e efeitos de hover
- **Trilha Início na Programação** — Lógica, algoritmos, estruturas de dados, Git, HTML/CSS/JS fundamentais e ferramentas
- **Trilha Front-End** — HTML, CSS, JavaScript, frameworks (React, Angular, Vue), ferramentas de build, responsividade e acessibilidade
- **Trilha Back-End** — Bancos de dados (SQL/NoSQL), APIs (REST/GraphQL), linguagens de servidor, autenticação, caching, microserviços e DevOps
- **Trilha Full-Stack** — Integração das trilhas Front-End e Back-End com visão holística
- **Cartões de habilidades com níveis** — Classificação progressiva (Essencial → Importante → Avançado)
- **Design responsivo** — Media queries com meta viewport para adaptação a smartphones, tablets e desktops
- **Animações CSS** — Entrada de elementos, hover em cards e backgrounds flutuantes

---

## Tecnologias

### Core

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat&logo=googlefonts&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=flat&logo=fontawesome&logoColor=white)

### Ferramentas de Desenvolvimento

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

**Requisitos mínimos:**

- Navegador moderno (Chrome, Firefox, Safari, Edge)

---

## Arquitetura

A aplicação é um site estático multi-página, puramente client-side, sem dependência de backend:

```
Usuário
  → Vercel Edge Network (CDN global)
    → index.html (hub de navegação com cartões interativos)
      → pages/Start/Start.html (trilha Início)
      → pages/Front-End/Front-End.html (trilha Front-End)
      → pages/Back-End/Back-End.html (trilha Back-End)
      → pages/Full-Stack/Full-Stack.html (trilha Full-Stack)
    → styles/ (design system modular)
      ├── tokens.css (variáveis de design)
      ├── base.css (estilos base)
      ├── layout.css (grids e layouts)
      ├── components.css (componentes reutilizáveis)
      ├── utilities.css (utilitários)
      └── pages/ (estilos específicos por trilha)
```

Cada página de trilha carrega seus próprios estilos e recursos, com variáveis CSS (`:root`) customizadas para paleta de cores temática. A navegação é feita via links HTML entre páginas, sem chamadas a APIs ou processamento dinâmico.

---

## Estrutura do Projeto

```
Brain-Developer/
├── index.html                     # Página principal e hub de navegação
├── pages/
│   ├── Start/
│   │   └── Start.html             # Trilha: Início na Programação
│   ├── Front-End/
│   │   └── Front-End.html         # Trilha: Desenvolvedor Front-End
│   ├── Back-End/
│   │   └── Back-End.html          # Trilha: Desenvolvedor Back-End
│   └── Full-Stack/
│       └── Full-Stack.html        # Trilha: Desenvolvedor Full-Stack
├── styles/
│   ├── tokens.css                 # Tokens de design (cores, tipografia)
│   ├── base.css                   # Estilos base e reset
│   ├── layout.css                 # Layouts e grids
│   ├── components.css             # Componentes reutilizáveis
│   ├── utilities.css              # Classes utilitárias
│   └── pages/                     # Estilos específicos por trilha
├── .github/
│   └── workflows/
│       ├── ci.yml                 # Pipeline de CI
│       └── codeql.yml             # Análise de segurança
├── package.json                   # Scripts de lint/format e testes
└── LICENSE                        # Licença MIT
```

---

## Começando

### Pré-requisitos

A aplicação é um site estático e roda diretamente no navegador. Nenhuma dependência de runtime é necessária.

```bash
# Apenas para clonar o repositório
git --version  # v2 ou superior
```

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/ESousa97/Brain-Developer.git
cd Brain-Developer
```

### Uso Local

**Abrir diretamente no navegador:**

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

**Com servidor local (recomendado para caminhos relativos):**

```bash
python -m http.server 8000
# ou
npx serve .
```

Acesse: `http://localhost:8000/`

**Produção:** [braindeveloper.vercel.app](https://braindeveloper.vercel.app/)

**Acesso direto às trilhas:**

| Trilha      | URL                                                                    |
| ----------- | ---------------------------------------------------------------------- |
| Início      | [/pages/Start/Start.html](https://braindeveloper.vercel.app/pages/Start/Start.html) |
| Front-End   | [/pages/Front-End/Front-End.html](https://braindeveloper.vercel.app/pages/Front-End/Front-End.html) |
| Back-End    | [/pages/Back-End/Back-End.html](https://braindeveloper.vercel.app/pages/Back-End/Back-End.html) |
| Full-Stack  | [/pages/Full-Stack/Full-Stack.html](https://braindeveloper.vercel.app/pages/Full-Stack/Full-Stack.html) |

---

## Scripts Disponíveis

```bash
# Instalar dependências de desenvolvimento
npm install

# Executar lint
npm run lint

# Formatação
npm run format

# Testes
npm test
```

---

## Qualidade e Governança

O projeto adota práticas de governança para manter a qualidade do código:

- **CI** — Pipeline com lint e testes via GitHub Actions
- **Security** — Análise CodeQL semanal e em cada push/PR
- **Deploy contínuo** — Cada push na `main` aciona deploy automático na Vercel com URL de preview para PRs

---

## Deploy

### Vercel (Produção)

Deploy contínuo automatizado via integração GitHub. A Vercel detecta automaticamente o projeto como site estático e distribui via CDN global. Pull Requests geram URLs de preview automáticas para revisão.

O projeto também é compatível com Netlify, GitHub Pages ou qualquer plataforma de hospedagem estática.

---

## FAQ

<details>
<summary><strong>O Brain Developer é um curso?</strong></summary>

Não. É um guia de referência e roadmap que estrutura o que aprender em cada área e a ordem recomendada. Não oferece aulas ou exercícios interativos.
</details>

<details>
<summary><strong>Preciso pagar para usar?</strong></summary>

Não. O projeto é open source sob licença MIT, totalmente gratuito para acesso online ou uso local.
</details>

<details>
<summary><strong>Existe um backend ou armazenamento de dados?</strong></summary>

Não. É uma aplicação puramente estática — sem backend, sem banco de dados, sem cookies ou rastreadores.
</details>

<details>
<summary><strong>Por que não usar React ou Vue?</strong></summary>

Para conteúdo educacional estático, frameworks adicionariam complexidade desnecessária. HTML/CSS puros garantem máxima performance, compatibilidade e acessibilidade do código para contribuidores.
</details>

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License - você pode usar, copiar, modificar e distribuir este código.
```

---

## Contato

**José Enoque Costa de Sousa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enoque-sousa-bb89aa168/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/ESousa97)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=flat&logo=todoist&logoColor=white)](https://enoquesousa.vercel.app)

---

<div align="center">

**[⬆ Voltar ao topo](#brain-developer)**

Feito com ❤️ por [José Enoque](https://github.com/ESousa97)

**Status do Projeto:** Archived — Sem novas atualizações

</div>
