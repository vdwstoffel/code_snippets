# Start new repo
```bash
git init
git push
```
# Making Changes
```bash
git status                  # See changes
git add file.py             # Add files/folder to staging
git commit -m "my message"  # commit changes
git push                    # push to remote repo

git restore file.js         # discard any changes made
```

# Merging

```bash
git fetch
git merge origin/<branch_name>
git commit                  # if any conflict resole else just push
git push
```

# Go to previous commit 
```bash
git log --oneline
git reset sha_hash
```

# Stashing
```bash
git stash
git stash pop
```