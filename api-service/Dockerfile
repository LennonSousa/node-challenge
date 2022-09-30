FROM node:lts-alpine

WORKDIR /opt/api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm run prisma generate

CMD ["node", "./dist/src/app"]