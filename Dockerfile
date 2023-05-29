FROM node:20-alpine as production
WORKDIR /app
COPY . .
RUN npm ci --omit=dev
RUN npm run build
EXPOSE 80
RUN npm install -g serve

CMD [ "serve", "build", "-l", "80" ]