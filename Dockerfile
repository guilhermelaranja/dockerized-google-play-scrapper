FROM node:latest
MAINTAINER nobody
ENTRYPOINT ["/bin/bash"]

USER root
RUN apt-get update
RUN yes "y" | apt-get install vim less

USER node
WORKDIR /home/node

#install stuff
RUN whoami
RUN yes "" | npm init
RUN npm install google-play-scraper --save

