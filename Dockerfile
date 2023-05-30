FROM node:20-alpine as production
WORKDIR /app
COPY . .
RUN npm ci --omit=dev
RUN npm run build
RUN npm install -g serve

CMD [ "serve", "-s", "build", "-l", "80" ]