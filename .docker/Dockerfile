FROM node:20-slim

ARG USER=node
ARG UID=1000
ARG GID=1000

RUN usermod -u $UID -s /bin/bash $USER && groupmod -g $GID $USER
RUN apt-get -y update && apt-get -y install git

USER $USER

ENV NPM_CONFIG_PREFIX /home/node/.npm-global
ENV PATH $PATH:/home/node/.npm-global/bin
