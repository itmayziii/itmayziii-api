# Build step to run the typescript build process.
FROM node:18.17-alpine as builder
WORKDIR /home/node/app

ARG NODE_ENV=production

# Must always be "development". The below "npm ci" command will omit dev dependencies if it is set to "production" and
# we could therefore not run the build step.
ENV NODE_ENV=development

COPY package*.json ./
COPY . .

RUN npm ci
RUN npm run build
########################################################################################################################

# Final production image
FROM node:18.17-alpine
WORKDIR /home/node/app

# Dev dependencies will not be installed by the below "npm ci" command if NODE_ENV stays as "production"
ARG NODE_ENV=production

ENV NODE_ENV=$NODE_ENV
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

COPY package*.json ./
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

RUN npm ci

EXPOSE 3000

USER node
CMD ["node", "dist/index.js"]
