FROM node:lts-alpine

WORKDIR /opt/api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "./dist/src/app"]