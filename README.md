This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Working on Dev

1. Clone repository from [`github/teslo-app`](https://github.com/jojupacr5/teslo-shop)

2. Make a copy of `.env.template` and rename it to `.env` change the env variables

3. Install dependencies `npm install`

4. Raise the database `docker compose up -d`

5. Run Prisma migrations `npx prisma migrate dev`

6. Execute seed `npm run seed`

7. Run project in development `npm run dev`

## Working on Production
