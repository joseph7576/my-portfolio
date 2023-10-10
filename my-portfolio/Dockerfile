FROM node:20-alpine3.17

WORKDIR /app
COPY package*.json .
RUN npm install -g gatsby-cli
RUN npm install

COPY . .
RUN gatsby clean
RUN gatsby build

EXPOSE 9000


CMD [ "gatsby", "serve", "-o", "-H", "0.0.0.0" ]
