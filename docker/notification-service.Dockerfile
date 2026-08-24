FROM node:20-alpine AS builder

WORKDIR /app

# Install turbo
RUN npm install -g turbo

# Copy monorepo config
COPY package.json package-lock.json turbo.json ./
COPY apps/notification-service/package.json ./apps/notification-service/package.json
COPY packages ./packages

# Install dependencies
RUN npm ci

# Copy source code
COPY apps/notification-service ./apps/notification-service

# Build
RUN turbo run build --filter=notification-service...

# Production image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Only copy prod deps and built code
COPY package.json package-lock.json ./
COPY apps/notification-service/package.json ./apps/notification-service/package.json
RUN npm ci --omit=dev

COPY --from=builder /app/apps/notification-service/dist ./apps/notification-service/dist
COPY --from=builder /app/packages ./packages

EXPOSE 5002

CMD ["node", "apps/notification-service/dist/server.js"]
