# How to contribute
This file describes how to contribute to this project.

## Git workflow - master only
We use the Git workflow called Master Only in this project. To contribute,
please do as following:

1. Go to project folder.
2. Make sure to fetch the latest changes from the master branch:
```
$ git checkout master
$ git pull
```

3. Now, make a new branch. Prefix your branch with the number of the issue you
are working on:
```
$ git checkout -b <issue-number>-<branch-name>
```

4. Do your implementation. Remember to make each branch contain as little new
   functionality as possible. Granulate your work as much as possible.
5. Commit and push at least twice a day! Before lunch and before you go home is
   cool B)

```
$ git add <files>
$ git commit -m "Add awesome functionality"
$ git add <other files>
$ git commit -m "Remove dirty code"
$ git push
```

6. When your functionality is finished, commit and push. Then go to Gitlab and
   make a Merge Request. At least one person must review and approve the merge
   request. Make sure to add the Merge Request template for your merge request.

7. When merge request is approved, rebase to master and push your branch. The
   merge request template will describe how to rebase.

8. Then you may merge it to master! Whoop whoop!_\(^\_ ^)/_

---

### Tips

#### Writing commit messages
1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

These steps are written in details in the following article, read it and learn 
how to write commit messages like a pro!
* https://chris.beams.io/posts/git-commit/
