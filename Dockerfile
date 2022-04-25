FROM node:17.9.0-slim

WORKDIR /app

RUN corepack enable
COPY . .

RUN yarn install


CMD [ "yarn", "start" ]

EXPOSE 3000