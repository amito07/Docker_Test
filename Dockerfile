FROM node:14

#create app directory

WORKDIR /app

COPY package*.json ./

RUN npm install

#Bundle app source

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
