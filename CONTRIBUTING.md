# Contribuindo para o Brain Developer

Obrigado por considerar contribuir!

## Fluxo rápido

1. Faça um fork e crie sua branch: `feat/minha-mudanca`.
2. Faça alterações pequenas e focadas.
3. Rode os checks locais:
    - `npm run lint`
    - `npm run test`
4. Abra um Pull Request descrevendo o que foi feito.

## Padrões de código

- Respeite o `.editorconfig` e o `.prettierrc`.
- Não quebre o layout existente.
- Prefira HTML e CSS limpos, sem dependências desnecessárias.

## Estrutura

- `index.html`: página principal.
- `pages/`: páginas internas.
- `styles/`: design system e estilos por página.
- `tests/`: validações mínimas de estrutura.

## Mensagens de commit

Use mensagens claras e objetivas, por exemplo:

- `feat: melhora hero da home`
- `fix: corrige espaçamento na seção start`
- `chore: ajusta lint`
