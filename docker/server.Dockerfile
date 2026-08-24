FROM node:20-alpine AS builder

WORKDIR /app

# Install turbo
RUN npm install -g turbo

# Copy monorepo config
COPY package.json package-lock.json turbo.json ./
COPY apps/server/package.json ./apps/server/package.json
COPY packages ./packages

# Install dependencies
RUN npm ci

# Copy source code
COPY apps/server ./apps/server

# Build
RUN turbo run build --filter=server...

# Production image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Only copy prod deps and built code
COPY package.json package-lock.json ./
COPY apps/server/package.json ./apps/server/package.json
RUN npm ci --omit=dev

COPY --from=builder /app/apps/server/dist ./apps/server/dist
COPY --from=builder /app/packages ./packages

EXPOSE 5000

CMD ["node", "apps/server/dist/server.js"]
