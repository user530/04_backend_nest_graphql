FROM node:18 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .

RUN npm i -g @nestjs/cli
RUN npm install --production=true

RUN apt-get -q update && apt-get -q install netcat

COPY . .

RUN node run build

CMD ["sh", "-c", "npx typeorm migration:run && npm run start:prod"]