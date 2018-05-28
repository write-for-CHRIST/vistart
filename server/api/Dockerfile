FROM node:8.11.2-alpine

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN mkdir -p /api/node_modules

WORKDIR /api

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
        touch yarn-error.log; \
        mkdir -p -m 777 build node_modules /home/node/.cache/yarn; \
        chown -R root:root node_modules package.json yarn.lock /home/node/.cache/yarn; \
    fi;

COPY . .

USER root

EXPOSE 4002

CMD ["node", "yarn.js"]
