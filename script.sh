#!/bin/bash

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/github

cd /home/joe/projects/my-portfolio

git pull

docker compose -f docker-compose.prod.yml build --no-cache
docker compose -f docker-compose.prod.yml up -d