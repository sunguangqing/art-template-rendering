*** 查看分支状态 ***
git status

*** 切换分支 ***
git checkout master

*** 合并此分支到当前分支 ***
git merge branch-name

*** 拉取远程分支 ***
git pull origin branch-name

*** 移除远程主分支 ***
git remote remove origin

*** 添加主分支为ssh ***
git remote add origin git@git.xxxx.com.au:xx/xxx.git

*** 查看本地所有分支 ***
git branch -a

*** 创建本地分支 ***
git branch branch-name

*** 删除分支 ***
git branch -d branch-name

*** 查看帮助 ***
git branch --help

*** 添加提交队列 ***
git add -A

*** 提交分支的队列 ***
git commit -m 'text'

*** 上传 ***
git push

*** 第一次需要设置关联分支 ***
git push --set-upstream origin branch-name



## 新建项目 拉取远程仓库
*** 创建文件夹 并 进入文件夹 ***
mkdir /project/project-name
cd /project/project-name

*** 初始化git ***
git init

*** 添加远程仓库地址 ***
git remote add origin git-addres

*** 从远程仓库拉取 ***
git pull origin master


## 本地已有仓库，但想更换远程仓库
*** 删除原有远程仓库地址 ***
git remote remove origin

*** 添加远程仓库地址 ***
git remote add origin git-addres


## 项目修改提交-没有分支，只有master主分支
*** 拉取最新的master代码 ***
git pull origin master

*** 添加修改文件列表 ***
git add -A

*** 提交修改和修改简介 ***
git commit -m 'text'

*** 提交到远程仓库 ***
git push origin master


## 项目修改提交-有子分支
*** 切换到master分支并更新 ***
git checkout master
git pull origin master / git pull

*** 切换到子分支, 并拉取远程master到子分支上，或者将本地master合并到子分支上 ***
git checkout branch-name
git pull origin master / git merge master

*** 在子分支上修改后 ***
git add -A
git commit -m 'text'
git push origin branch-name

*** 将子分支的代码合并到master上 ***
git checkout master
git merge branch-name

*** 有冲突就改冲突，没冲突就直接提交 ***
git push origin master



***强制删除 ***
rm -rf .git