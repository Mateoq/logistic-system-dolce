FROM node
# MAINTAINER Mateo Quintero <quinterom1592@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
RUN npm build

ENV NODE_ENV production

EXPOSE 8000
CMD ["npm", "run", "start"]

