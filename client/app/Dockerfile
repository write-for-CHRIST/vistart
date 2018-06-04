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

# Install expo & do login
RUN npm install -g exp
RUN npm config set '@bit:registry' https://node.bitsrc.io

COPY package.json yarn.lock ./

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
        exp login --username $EXPO_USERNAME --password $EXPO_PASSWORD; \
        mkdir -p -m 777 build node_modules /home/node/.cache/yarn; \
        chown -R root:root node_modules package.json; \
    fi;

COPY . .


EXPOSE 19000
EXPOSE 19001
EXPOSE 4040
EXPOSE 80

CMD ["node", "yarn.js"]