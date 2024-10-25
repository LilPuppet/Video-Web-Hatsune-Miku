# Tarefa2-RadioWebAzul
## AVISO
Por favor, deixe o volume do seu dispositivo em 30%, a idéia do projeto é reproduzir uma música.

## Começando
Esse é um projeto [Next.js](https://nextjs.org/) usando o bootstrap [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Primeiro, você precisa ter o node.js instalado e adicionar essas instalações:
```bash
npm install
# or
yarn install
# AND
npm install react-icons
```

Você vai precisar instalar o TailWind também, pesquise no seu VSCODE as seguintes extensões:
```bash
Tailwind CSS InteliSense
# AND
PostCSS Language Support
```

Para instalar o TailWind no seu projeto, execute:
```bash
npm install -D tailwindcss postcss autoprefixer
# AND
npx tailwindcss init -p
```
LEMBRE DE REINICIAR SEU VSCODE ANTES DE RODAR!

Para rodar o ambiente de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Você pode editar a página modificando `app/page.tsx`. A página irá se atualizar automaticamente conforme você salva seu progresso.
Esse projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar a fonte Inter, uma fonte do Google, automaticamente.

## Mais sobre Next.js

Veja nesses links:
- [Next.js Documentation](https://nextjs.org/docs) - aprenda mais sobre Next.js, sua API e funcionalidades.
- [Learn Next.js](https://nextjs.org/learn) - um tutorial interativo de Next.js

Você pode checar [the Next.js GitHub repository](https://github.com/vercel/next.js/) - agradeço pela paciência e adoraria novas sugestões para meu pequeno estudo!

## Deploy no Vercel

Uma forma mais fácil de dar deploy no projeto é usando [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), criado pelos mesmos desevolvedores do Next.js.

Cheque [Next.js deployment documentation](https://nextjs.org/docs/deployment) para mais detalhes.
