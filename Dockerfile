FROM node:18-alpine

WORKDIR /client

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "dev" ]