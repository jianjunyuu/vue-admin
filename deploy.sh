#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

dir=vue-admin
repositoryDir=~/Projects/mryujianjun.github.io/
target=${repositoryDir}${dir}

# 完整的路径
# echo ${target}${dir}

# 生成静态文件
vue-cli-service build --dest ${dir}

# 判断目录是否存在，是的话要先删除
if test -e ${target}
then
    rm -r ${target}
    echo ${target}${dir}' deleted it!!!'
fi
mv ${dir} ${repositoryDir}

# 部署到远程仓库 https://github.com/mryujianjun/mryujianjun.github.io.git
cd ~/Projects/mryujianjun.github.io/
git add vue-admin
git commit -m "deploy vue-admin"
git pull
git push origin master
echo "部署成功!"
echo "https://mryujianjun.cn/vue-admin/"
