#!/bin/bash

# 获取bash脚本所在目录
DIR=$(dirname `pwd`/$0)

# VPSCONFIG 环境变量来保存vps的配置
if   [ $VPSCONFIG ]; 
then 
rsync -avz --delete $DIR/../public/ $VPSCONFIG
else 
echo   "please set vpsconf environment variables eg: VPSCONFIG=root@123.456.789.123:/var/www/html/"
fi
