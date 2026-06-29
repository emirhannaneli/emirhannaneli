# syntax=docker/dockerfile:1
# Multi-stage build for the Next.js 16 (standalone) portfolio.

FROM node:22-slim AS base
WORKDIR /app

# --- Install dependencies ---
FROM base AS deps
COPY package.json package-lock.json* ./
# The committed lockfile is generated on Windows, so it only records the
# win32 native optional packages — the Linux builds of lightningcss and
# @tailwindcss/oxide (needed by Tailwind v4) are absent from its tree. Both
# `npm ci` and `npm install` honor that incomplete tree and skip them, which
# breaks `next build`. Drop the lock so npm resolves the linux-x64-gnu
# binaries fresh for this image.
RUN rm -f package-lock.json && npm install --no-audit --no-fund

# --- Build ---
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# --- Run ---
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
RUN groupadd --system --gid 1001 nodejs && useradd --system --uid 1001 --gid nodejs nextjs

# standalone output bundles only what the server needs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
