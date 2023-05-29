#!/bin/bash
git pull origin develop

docker-compose -f docker-compose.yml up -d --build