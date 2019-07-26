// Read and follow [CONTRIBUTING.md](CONTRIBUTING.md)

---

### Rules:

- At least 1 review before merging tasks
- If the PR is getting too messy, close the current and open a new PR

---

When PR is approved, do the following:

```
$ git checkout master
$ git pull
$ git checkout <your_branch>
$ git rebase master
$ git push -f origin <your_branch>
```

Or, just `git push -f` might work.

---

Add description about your merge request here ^\_^