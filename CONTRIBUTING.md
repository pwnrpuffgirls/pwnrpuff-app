# How to contribute
This file describes how to contribute to this project.

All tech security woman and non-binary people in Norway is very welcome to join
our little group. We try to meet up some times and do some programming or 
hacking together. One of the things we do if we have time, is to hack on this
web app. 

You are more than welcome to make you own page in our little project. Some of
us are more security people than developers and some of us are just beginners, 
so this is project is not serious at all. The goal is merely to make a project
that you can use to gain new tech skills without being afraid of mean comments
on your code, or someone judging you. Git skills are very good to have for one,
but it may be very scary to begin with. 

What we thought may be cool, is that everyone gets their own page to work on.
Do whatever you like with it (but of course no mean content). As examples,
you may use it as a resumé, or to post your writings or attendences. 

As a starting guide on how to contribute, please follow these steps:
1. Follow the section [Git workflow](git-workflow) to make you own branch in Git.
2. Then when you have made your own branch, follow the 
[Make your own page](#make-your-own-page) section to make your own page.
3. Lastly, add your picture and page to the Pwnrpuff Girls page by following
the [Add to Pwnrpuff Girls page](add-to-pwnrpuff-girls-page).

We aren't very strict on commits and Git usage, but there are some tips in the
[Writing commit messages section](#writing-commit-messages) if you want to 
learn a thing or two :)

## Git workflow
We use a Git workflow we call "Master Only" in this project. That means that you
will never do any changes directly to the branch called `master`. In fact, we
turn it off in the Gitlab settings to make sure it never happens. To learn more
about Git workflows, checkout [this](https://skillsmatter.com/skillscasts/8246-december-londroid)
talk. 

To contribute, please do as following:

1. Go to project folder.
2. Make sure to fetch the latest changes from the master branch (what we call 
to pull the repository):
```
$ git checkout master
$ git pull
```

3. Now, make a new branch. Prefix your branch with the number of the issue you
are working on:
```
$ git checkout -b <issue-number>-<branch-name>
```

	NOTE! Always switch to the master branch using the 'git checkout' command
	before making a new branch. Or else, you will branch out of the wrong branch.

4. Do your implementation. Remember to make each branch contain as little new
   functionality as possible. Granulate your work as much as possible.
5. Commit and push your changes to the remote repository. We do this so that
   the code is not only locally on your computer, but also in Gitlab. Don't worry,
   your code is still not going to be put into the `master` branch. Execute these
   commands:

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

## Make your own page
Follow these steps:

1. To begin with, go to the folder `/src/views/Pwnrs/`. This is the place to put
your own page. 
2. Make a page with a name that does not exist. Preferrably `yourName.vue`.
3. Put whatever Vue code you want in the page!

## Add to Pwnrpuff Girls page
Now that you have made a page, you may add your picture to the `Pwnrpuff Girls`
page. To do that, follow these steps:

1. Go to `/src/components/`.
2. Open the file `HexagonGrid.vue`.
3. Add yourself to the `pwnrs` JSON array. 

	Note that the array will probably be moved at some point to make to code a
	little more tidy. If you read this, and it has been moved, feel free to 
	update this file. 

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
