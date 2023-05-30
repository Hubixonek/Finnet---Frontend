FROM node:alpine AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

FROM node:20-alpine as production
WORKDIR /app
COPY --from=dependencies /app/build ./build
RUN npm install -g serve

CMD [ "serve", "-s", "build", "-l", "80" ]