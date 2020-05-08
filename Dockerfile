FROM node:14.1-alpine  
WORKDIR /app
RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*
COPY package.json /app
RUN npm install
COPY . /app
COPY ./dist /app
COPY ./data /app/dist 
CMD ["npm", "run", "start:prod"]