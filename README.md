Full-stack app built with [T3 Stack](https://create.t3.gg/)

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Supabase](https://supabase.com/)
- **Type-safety**: [tRPC](https://trpc.io/)
- **ORM**: [Prisma](https://prisma.io/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

To run this project, you will need to add the following environment variables to your `.env` file

```bash
# Database URL for Prisma
DATABASE_URL=

# Clerk for auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

```


## Run Locally

Clone the project

```bash
  git clone https://github.com/quang08/Online-Marketplace.git
```

Go to the project directory

```bash
  cd Online-Marketplace
```

Install dependencies

```bash
  npm install
```

Apply migrations to database

```bash
  npx prisma db push
```


Start the server

```bash
  npm run dev
```
