# Backend Portfolio

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=flat&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat&logo=mongodb&logoColor=white)

REST API for Mohammadmehdi Dalvandi's portfolio (projects, certificates, timeline, contact messages, admin auth). Pairs with the [`frontend-portfolio`](https://github.com/mohammadmehdidalvandii/frontend-portfolio) app.

## Tools

- **Runtime / Language:** Node.js, TypeScript, `ts-node`, `nodemon`
- **Framework:** Express 5
- **Database:** MongoDB via Mongoose
- **Auth:** `jsonwebtoken`, `bcryptjs`
- **Uploads:** `multer`
- **Middleware:** `helmet`, `cors`, `cookie-parser`, `morgan`
- **Config:** `dotenv`

## Structure

```
src/
├── server.ts          # Entry point: middleware, DB connection, route mounting
├── config/             # db.ts (Mongoose connection), multer.ts (upload config)
├── routes/               # One router per resource: User, Project, Certificate, TimeLine, Message
├── controller/             # Request/response handling
├── services/                 # Business logic
├── repositories/               # Mongoose queries
├── models/                       # Mongoose schemas
├── middleware/                     # auth.middleware.ts, notFound.middleware.ts
├── validation/                       # Shared DTO types
├── types/                              # Express + per-resource types
└── utils/Auth.ts                         # JWT sign/verify, password hashing
uploads/                                   # Multer's upload destination, served at /uploads
```

Every resource follows the same pattern: **router → controller → service → repository → model**.

## How to Run

Prerequisites: **Node.js 18+** and **MongoDB** (local or a connection string).

```bash
git clone https://github.com/mohammadmehdidalvandii/backend-portfolio.git
cd backend-portfolio
npm install

cp .env.example .env   # then set SECRET_JWT (required)
npm run dev
```

Env vars (`.env`):

| Variable | Required | Default |
|---|---|---|
| `SECRET_JWT` | **Yes** | — |
| `MONGO_URL` | No | `mongodb://localhost:27017/portfolio-demo` |
| `PORT` | No | `3000` |

The API listens on `http://localhost:3000`, routes under `/api`.

> The `dev` script in `package.json` currently has an unterminated quote and fails with `Unterminated quoted string`. Until it's fixed, run:
> ```bash
> npx nodemon --watch "src/**/*.ts" --exec ts-node src/server.ts
> ```
