#!/usr/bin/bash

# Script to setup dependancies
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

## For any libnode72 related errors see:
# https://unix.stackexchange.com/questions/627635/upgrading-nodejs-on-ubuntu-how-to-fix-broken-pipe-error