UsingChef Jekyll site.
----

## Install

`bundle install --path _vendor`

## Run

`bundle jekyll serve --watch`

## Build

`bundle jekyll build`

## Deployment

```bash
#!/bin/bash -l
GIT_REPO=$HOME/repos/usingchef.git
TMP_GIT_CLONE=$HOME/tmp/git/usingchef
PUBLIC_WWW=/var/www/usingchef/

git clone $GIT_REPO $TMP_GIT_CLONE
cd $TMP_GIT_CLONE
bundle install --path $HOME/tmp/_vendor/bundle
bundle exec jekyll build --source $TMP_GIT_CLONE --destination $PUBLIC_WWW
cd -
rm -Rf $TMP_GIT_CLONE
exit
```
via:
<https://www.digitalocean.com/community/tutorials/how-to-deploy-jekyll-blogs-with-git>
