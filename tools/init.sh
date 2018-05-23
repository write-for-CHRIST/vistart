#!/bin/bash -e
echo "Setting up environment..."

# Prepare required environments
command -v docker >/dev/null 2>&1 || {
  echo >&2 "ERROR: No docker found. Please install Docker first!"
  exit 1;
}

# Make sure Prisma is installled globally
command -v prisma >/dev/null 2>&1 || {
  echo >&2 "ERROR: Node module Prisma is not found globally, installing it..."
  npm install -g prisma;
}

# Make copy of env files for docker-compose.
build_env_file=$(pwd)/envs/build.env
share_env_file=$(pwd)/envs/share.env
graph_env_file=$(pwd)/envs/graph.env
web_env_file=$(pwd)/envs/web.env
app_env_file=$(pwd)/envs/app.env

if [ -f $build_env_file ]; then
  echo "$build_env_file file already existed, skip copy!";
else
  cp ./envs/build.env.sample $build_env_file;
  echo "Copied file: "$build_env_file;
fi;

if [ -f $share_env_file ]; then
  echo "$share_env_file file already existed, skip copy!";
else
  cp ./envs/share.env.sample $share_env_file;
  echo "Copied file: "$share_env_file;
fi;

if [ -f $graph_env_file ]; then
  echo "$graph_env_file file already existed, skip copy!";
else
  cp ./envs/graph.env.sample $graph_env_file;
  echo "Copied file: "$graph_env_file;
fi;

if [ -f $web_env_file ]; then
  echo "$web_env_file file already existed, skip copy!";
else
  cp ./envs/web.env.sample $web_env_file;
  echo "Copied file: "$web_env_file;
fi;

if [ -f $app_env_file ]; then
  echo "$app_env_file file already existed, skip copy!";
else
  cp ./envs/app.env.sample $app_env_file;
  echo "Copied file: "$app_env_file;
fi;