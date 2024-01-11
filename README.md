## Installation

```bash
git clone https://github.com/Rioba-Ian/user-management-express-ts.git

cd user-management-express-ts.git

# check you're using node version 18

nvm use 18


npm install

#or

pnpm install

npx prisma db pull

```

You can create a .env file which has the DATABASE_URL. Take a look at the utils/envSchema.ts for the env variables.

## Description

The api docs are under /api-docs and you'll see below

![Api docs](image.png)

## API Endpoints

Provide a list of available API endpoints along with their HTTP methods, parameters, and descriptions.

- `GET /api/users`: Retrieves a list of users. Requires a Bearer token for authorization.
- `POST /api/users/login`: Logs in a user. Returns a user object and a token.
- `POST /api/users`: Registers a new user. Returns the created user object.

### Technology used

1. Typescript
2. Express
3. Prisma for ORM
4. Postgres (Neontech Postgres instance)
5. Swagger docs for documenation
6. Vercel for deployment
