#!/bin/bash
git pull origin develop

docker-compose stop
docker-compose -f docker-compose.production.yml up -d --build