#!/bin/sh
cd /home/ec2-user/app/client-front || exit
sudo cp ../envs/admin-front.env .env
/usr/local/bin/docker-compose up --build -V -d prod
#prune old images
sh ../close.sh