FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 80
RUN npm install -g serve

CMD [ "serve", "build", "-l", "80" ]