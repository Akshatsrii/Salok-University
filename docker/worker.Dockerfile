FROM node:20-alpine AS builder

WORKDIR /app

# Install turbo
RUN npm install -g turbo

# Copy monorepo config
COPY package.json package-lock.json turbo.json ./
COPY apps/worker/package.json ./apps/worker/package.json
COPY packages ./packages

# Install dependencies
RUN npm ci

# Copy source code
COPY apps/worker ./apps/worker

# Build
RUN turbo run build --filter=worker...

# Production image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Only copy prod deps and built code
COPY package.json package-lock.json ./
COPY apps/worker/package.json ./apps/worker/package.json
RUN npm ci --omit=dev

COPY --from=builder /app/apps/worker/dist ./apps/worker/dist
COPY --from=builder /app/packages ./packages

CMD ["node", "apps/worker/dist/index.js"]
