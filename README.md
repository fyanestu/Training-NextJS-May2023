# Training Mega - Next JS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Requirement

- Node JS v16
- Fake API (<https://jsonplaceholder.typicode.com/posts>)

---

## Day 1 - Installation and Basic Setup

```sh
npx create-next-app@latest training-bankmega-nextjs
cd training-bankmega-nextjs

√ Would you like to use TypeScript with this project? ... No
√ Would you like to use ESLint with this project? ... No
√ Would you like to use Tailwind CSS with this project? ... Yes
√ Would you like to use `src/` directory with this project? ... No
√ Use App Router (recommended)? ... No
√ Would you like to customize the default import alias? ... Yes
√ What import alias would you like to configured? ... @app/*

# Path alias akan tersimpan di file ./jsconfig.json

# Installing sass
npm install sass

# Buat folder dan file di ./styles/sass/main.scss
# Buat folder dan file di ./styles/sass/base/index.scss
# Update postcss.config.js

# Install postcss plugins
npm install postcss-import cssnano postcss-plugin

# Data fetching https://jsonplaceholder.typicode.com/posts
npm install axios

# Edit pages/_app.js
# Jalankan script
npm run dev
```

## Day 2 - Props, Components, JS Docs, SASS, BEM (Block Element Modifier) SASS Syntax

```sh
npm install prop-types

# Belajar SASS Variable
# Belajar SASS Nested
# Belajar SASS Mixin
```

## Day 3 - Next API, validasi API, Next Auth

```sh
npm install next-connect
npm install joi@17.7.1  next-joi@2.2.1
npm install next-auth
```

## Day 4 - Prisma

```sh
npm install prisma

# Test command
npx prisma

npx prisma init

# Edit file di ./prisma/schema.prisma
npx prisma migrate dev
```
