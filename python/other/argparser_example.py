#!/usr/bin/python

import argparse

parser = argparse.ArgumentParser(
    description='Example of Command Line Arguments')
# Add arguments
parser.add_argument('-m',
                    '--message',
                    metavar="message",
                    action='store',
                    type=str,
                    nargs='?',
                    required=True,
                    help='Prints out a message to the console')

parser.add_argument('-c',
                    '--capitalize',
                    action='store_true',
                    help='Capitalizises the message')

# Create object
args = parser.parse_args()

if args.capitalize:
  print(args.message.upper())
else:
  print(args.message)
