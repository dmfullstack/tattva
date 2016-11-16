From mhart/alpine-node

RUN mkdir -p /usr/tattva

WORKDIR /usr/tattva

COPY . .

RUN npm install

CMD ["npm", "start", "--production"]

