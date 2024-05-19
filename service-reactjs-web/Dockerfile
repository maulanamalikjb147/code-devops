FROM node:16-alpine 
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY . ./
RUN  npm install --production

RUN npm run build

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
