FROM node:18
WORKDIR /app
COPY package* .
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "start"]