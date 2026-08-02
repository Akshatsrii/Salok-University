FROM node:22-alpine AS base

FROM base AS builder
WORKDIR /app
COPY package.json turbo.json ./
COPY apps/web ./apps/web
COPY packages ./packages
RUN npm install
RUN npm run build --workspace=web

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/apps/web/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start", "--workspace=web"]
