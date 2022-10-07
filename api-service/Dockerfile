FROM node:lts-alpine

RUN apk add g++ make py3-pip

WORKDIR /opt/api

COPY package*.json ./
COPY prisma ./prisma

RUN npm install

EXPOSE 3000

COPY . .

RUN npm run build

RUN npm run prisma-generate

CMD [ "npm", "run", "start:prod" ]