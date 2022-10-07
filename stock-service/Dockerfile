FROM node:lts-alpine

WORKDIR /opt/api

COPY package*.json ./

RUN npm install

EXPOSE 3001

COPY . .

RUN npm run build

CMD ["node", "dist/main"]