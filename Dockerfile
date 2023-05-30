FROM node:alpine AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:20-alpine as production
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules

ARG NODE_ENV=production
RUN echo ${NODE_ENV}
RUN NODE_ENV=${NODE_ENV} npm run build
RUN npm install -g serve

CMD [ "serve", "-s", "build", "-l", "80" ]