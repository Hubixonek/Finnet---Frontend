#!/bin/bash
git pull origin develop

docker-compose -f docker-compose up -d --build