FROM mhart/alpine-node:8
WORKDIR /svc
COPY /svc/package*.json ./
RUN npm install --production
COPY /svc .
EXPOSE 3000
CMD ["npm", "start"]
