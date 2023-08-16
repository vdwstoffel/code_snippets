# Flows

## Start new repo
```bash
git init
git push
```
## Making Changes
```bash
git status                  # See changes
git add file.py             # Add files/folder to staging
git commit -m "my message"  # commit changes
git push                    # push to remote repo

git restore file.js         # discard any changes made
```

## Merging

```bash
git fetch
git merge origin/<branch_name>
git commit                  # if any conflict resole else just push
git push
```

## Go to previous commit 
```bash
git log --oneline
git reset sha_hash
```

## Stashing
```bash
git stash
git stash pop
```

# Git Commands
## Getting Started
```bash
git clone     # Clone a repository into a new directory
git init      # Create an empty Git repository or reinitialize an existing one
```

## Current changes
```bash
git add       # Add file contents to the index
git mv        # Move or rename a file, a directory, or a symlink
git restore   # Restore working tree files
git rm        # Remove files from the working tree and from the index
```

## History and State
```bash
git bisect    # Use binary search to find the commit that introduced a bug
git diff      # Show changes between commits, commit and working tree, etc
git grep      # Print lines matching a pattern
git log       # Show commit logs
git show      # Show various types of objects
git status    # Show the working tree status
```


## Grow, mark and tweak your common history
```bash
git branch    # List, create, or delete branches
git commit    # Record changes to the repository
git merge     # Join two or more development histories together
git rebase    # Reapply commits on top of another base tip
git reset     # Reset current HEAD to the specified state
git switch    # Switch branches
git tag       # Create, list, delete or verify a tag object signed with GPG
```

## Collaborate
```bash
git fetch     # Download objects and refs from another repository
git pull      # Fetch from and integrate with another repository or a local branch
git push      # Update remote refs along with associated objects
```
