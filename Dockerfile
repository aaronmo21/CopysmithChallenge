FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install nodemon
RUN npm install koa-body
RUN npm install koa-bodyparser
RUN npm install koa-json
RUN npm install koa-router
RUN npm install mongoose
RUN npm install openai
RUN npm install koa
RUN npm install openai-api

COPY . /app

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]