FROM node:20-alpine AS builder

WORKDIR /app

# Install turbo
RUN npm install -g turbo

# Copy monorepo config
COPY package.json package-lock.json turbo.json ./
COPY apps/ai-service/package.json ./apps/ai-service/package.json
COPY packages ./packages

# Install dependencies
RUN npm ci

# Copy source code
COPY apps/ai-service ./apps/ai-service

# Build
RUN turbo run build --filter=ai-service...

# Production image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Only copy prod deps and built code
COPY package.json package-lock.json ./
COPY apps/ai-service/package.json ./apps/ai-service/package.json
RUN npm ci --omit=dev

COPY --from=builder /app/apps/ai-service/dist ./apps/ai-service/dist
COPY --from=builder /app/packages ./packages

EXPOSE 5001

CMD ["node", "apps/ai-service/dist/server.js"]
