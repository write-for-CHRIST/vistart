FROM node:8.11.2

ARG NODE_ENV=production
ARG EXPO_USERNAME
ARG EXPO_PASSWORD
ENV NODE_ENV=$NODE_ENV
ENV EXPO_USERNAME=$EXPO_USERNAME
ENV EXPO_PASSWORD=$EXPO_PASSWORD

RUN mkdir -p /app/node_modules

WORKDIR /app

COPY package.json yarn.lock ./

# Install expo & do login
RUN npm install -g exp
RUN echo "Expo credentials: $EXPO_USERNAME $EXPO_PASSWORD"
RUN exp login --username $EXPO_USERNAME --password $EXPO_PASSWORD

RUN set -ex; \
    if [ "$NODE_ENV" = "production" ]; then \
        echo "Build for production image"; \
        yarn install --no-cache --frozen-lockfile --production; \
    elif [ "$NODE_ENV" = "test" ]; then \
        echo "Build for test image"; \
        touch yarn-error.log; \
        yarn install --no-cache --frozen-lockfile; \
        chown -R root:root node_modules package.json yarn.lock yarn-error.log; \
    else \
        echo "Build for development image"; \
        touch yarn-error.log; \
        mkdir -p -m 777 build node_modules /home/node/.cache/yarn; \
        chown -R root:root node_modules package.json yarn.lock /home/node/.cache/yarn; \
    fi;

COPY . .

RUN yarn config set "@bit:registry" "https://node.bitsrc.io/"

USER root

EXPOSE 19000
EXPOSE 19001
EXPOSE 4040
EXPOSE 80

CMD ["node", "npm.js"]