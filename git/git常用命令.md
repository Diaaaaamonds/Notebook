## 创建新分支

### 本地创建分支

git checkout -b feature

该命令的作用：基于当前分支（就是你写代码的分支）新建一个名为“feature”的分支（分支名自定），并切换到该分支。相当于同时执行了git branch dev和git checkout dev，前者是创建新分支，但并不切换过去；后者是切换到指定分支，并将本地代码也切换成指定分支的代码

## 代码添加提交

git add . 

将修改文件及新文件添加到本地仓库

git commit -m

将更改提交到当前分支

## push到远程仓库

git push -u origin feature

提交本地创建的feature分支到远程仓库

## 删除本地分支

git branch -d 

## 合并分支

git checkout master

git merge feature

先切换到主分支，再将新分支合并

## 查看分支

git branch

## 拉取远程分支

git pull



