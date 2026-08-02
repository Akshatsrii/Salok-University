FROM node:22-alpine AS base

FROM base AS builder
WORKDIR /app
COPY package.json turbo.json ./
COPY apps/ai-service ./apps/ai-service
COPY packages ./packages
RUN npm install
RUN npm run build --workspace=ai-service

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/apps/ai-service/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 4001
CMD ["node", "dist/index.js"]
