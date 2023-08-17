#!/usr/bin/bash

# Script to cleanup all the node modules
find ./ -type d -name "node_modules" -exec rm -rf {} +
find ./ -type d -name ".next" -exec rm -rf {} +