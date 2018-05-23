FROM node:10.1

ARG NODE_ENV=production
ARG EXPO_USERNAME
ARG EXPO_PASSWORD
ENV NODE_ENV=$NODE_ENV
ENV EXPO_USERNAME=$EXPO_USERNAME
ENV EXPO_PASSWORD=$EXPO_PASSWORD

RUN mkdir -p /app/node_modules

WORKDIR /app

USER root

COPY package.json package-lock.json ./

# Install expo & do login
RUN npm install -g exp@54.0.0
RUN npm install -g --unsafe-perm bit-bin@0.12.13

RUN set -ex; \
    if [ "$NODE_ENV" = "production" ]; then \
        echo "Build for production image"; \
        npm install; \
    elif [ "$NODE_ENV" = "test" ]; then \
        echo "Build for test image"; \
        bit install; \
        npm install; \
        chown -R root:root node_modules package.json package-lock.json; \
    else \
        echo "Build for development image"; \
        exp login --username $EXPO_USERNAME --password $EXPO_PASSWORD; \
        mkdir -p -m 777 build node_modules; \
        chown -R root:root node_modules package.json package-lock.json; \
    fi;

COPY . .

RUN yarn config set "@bit:registry" "https://node.bitsrc.io/"

EXPOSE 19000
EXPOSE 19001
EXPOSE 4040
EXPOSE 80

CMD ["node", "npm.js"]