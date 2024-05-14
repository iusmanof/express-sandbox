FROM node:14

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install

ENV PORT=8080

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]