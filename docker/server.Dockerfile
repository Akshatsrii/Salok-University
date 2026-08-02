FROM node:22-alpine AS base

FROM base AS builder
WORKDIR /app
COPY package.json turbo.json ./
COPY apps/server ./apps/server
COPY packages ./packages
RUN npm install
RUN npm run build --workspace=server

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/apps/server/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 4000
CMD ["node", "dist/server.js"]
