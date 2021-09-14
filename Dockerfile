# --- Installing stage
FROM node:10.10 AS installer

WORKDIR /usr/src/visalaw

ARG NODE_ENV=development
ARG PORT=3002

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}


COPY package*.json ./
RUN npm install --quiet

# ---

# Building stage
FROM installer AS builder

## Workdir is shared between the stage so let's reuse it as we neeed the packages
WORKDIR /usr/src/visalaw

COPY ./src src
COPY tsconfig.json .
COPY tslint.json .
COPY babel.config.js .
RUN npm start

# ---

# Running code under slim image (production part mostly)
FROM node:11.4-slim

## Clean new directory
WORKDIR /visalaw

## We just need the build and package to execute the command
COPY --from=builder /usr/src/visalaw/dist dist

CMD [ "node", "dist/index.js" ]
