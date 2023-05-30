#!/bin/bash
git pull origin develop

git clean -fdx
docker-compose -f docker-compose.yml up -d --build