#! /usr/bin/bash

# The command -v git command checks if the git command is available in the system's PATH. 
# The output is redirected to /dev/null to discard it.
if command -v git &>/dev/null; 
then
    echo "Git is installed."
    # Print the Git version
    echo "$(git --version)"
else
    echo "Git is not installed."
fi