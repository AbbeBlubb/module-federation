FROM node:14.15.0-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm build

EXPOSE 4000

CMD [ "npm", "run", "build:start" ]
