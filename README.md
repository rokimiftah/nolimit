## Live Endpoint Test Using Axios (v1)

`Receive all countries`

```
https://nolimit.projects.rokimiftah.id/api/v1/countries
```

`Receive country by code`

```
https://nolimit.projects.rokimiftah.id/api/v1/countries/:code
```

## Live Endpoint Test Using Persist Database & Prisma (v2)

`Receive all countries`

```
https://nolimit.projects.rokimiftah.id/api/v2/countries
```

`Receive country by code`

```
https://nolimit.projects.rokimiftah.id/api/v2/countries/:code
```

## Running in Local

```bash
npm install
```

```bash
cp .env.example .env

- Provide PostgreSQL URL
```

```bash
npm run prisma:push
```

```bash
npm run prisma:generate
```

```bash
npm run seed
```

```bash
npm run dev
```
