# vistart

Full-stack application start build for developers!

## Table of contents:

- [Features](#features)
- [Tech Stacks](#tech-stacks)
- [Getting Started](#getting-started)
  - [Software Requirements](#software-requirements)
  - [Internet Accounts](#internet-accounts)
  - [Up and Running](#up-and-running)
  - [Build and Deployment](#build-and-deployment)

## Features

- Place your solution features here.

## Tech Stacks

| Concern               | Solution               |
| --------------------- | ---------------------- |
| Monorepo              | Docker                 |
| Scripting Language    | TypeScript, JavaScript |
| Server                | NodeJS in Typescript   |
| Server Framework      | Express, GraphQL       |
| Database              | MySQL                  |
| Database Access Layer | GraphQL with Prisma    |
| Client                | React, React Native    |
| Unit Testing          | Jest, WallabyJS        |
| Design                | Sketch                 |

## Getting Started

### Software Requirements:

- Docker: All the micro services is run in its Docker container.
- NodeJS 9+: We choose the latest stable version.
- Yarn: Package manager from Facebook.
- VSCode (recommended for TypeScript) or any others IDE.

### Internet Accounts:

- Expo: This account is required for mobile app developement. Hit to the official site https://expo.io and sign up one.
- Docker Hub: This account is required if you use Docker CE for Mac when you first install Docker.

### Up and Running:

- Fork and clone this repo to your account.
- Cd to project directory and run initial installation script:

```bash
$ yarn
```

- Modify environment value in `envs` directory. See [Environment Variables](#environment-variables) for more details.

- Build docker image using `docker-compose`:

```bash
yarn pj:build
```

- The first time run: `yarn start`

This process will initialize the database which take a few seconds, that Prisma service won't wait enough for MySQL service to be ready. What you have to do is wait until every service go to idle state (not emitting new log in console) and press `Ctrl + C` to stop all the running services and restart it again by going to next step below.

- Start all development services:

```bash
$ yarn start
```

Run Expo application on your mobile phone with the Expo account that you've specified in `envs/build.env` file.

- After start development services first time, let's deploy GraphQL Schema to Prisma local server:

```bash
$ yarn deploy:graph
```

This will deploy database schema and seed the database with some datasets. If you didn't run this, the GraphQL server is not accessible because there is no project deployed.

### Build and Deployment:

- This project will be build in Travis.
- The deployment configuration with `dokku` in `.dokku-moronepo` file.
