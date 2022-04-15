FROM node:alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN yarn
EXPOSE 3000
CMD ["yarn", "start"]
