FROM node:18.18.2

WORKDIR /server
 
COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install
 
COPY . .

RUN npm run build

CMD [ "node", "build/server.js" ]