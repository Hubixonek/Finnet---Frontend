FROM node:alpine AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production
COPY --from=dependencies /app/dist /usr/share/nginx/html
COPY --from=dependencies /app/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# CMD [ "serve", "-s", "build", "-l", "80" ]
CMD ["nginx", "-g", "daemon off;"]