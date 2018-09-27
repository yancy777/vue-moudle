# vue-mould-project

> A Vue.js project 睿莱公共VUE项目模板

## Build Setup

``` bash

1.项目搭建：
#搭建
npm install -g vue-cli 
vue init webpack project-name
* ESLint code?no;
* Set up unit tests?no;
* Setup e2e tests..?yes; 单元测试,config文件中会多一个test.dev.js方便测试环境打包；
* Should we run 'npm install' for...?npm

# 安装
npm install

# 启动项目:启动express服务器 (浏览器：localhost:8080)
npm run dev

# 测试环境打包
npm run test

# 生产环境打包
npm run prod



2.引入指南>>: 

# axios 基于promise用于浏览器和node.js的http客户端;
npm install --save axios

# Element-UI
npm install element-ui --save

*主题色：替换node_modules/element-ui/lib/theme-default,但是会影响element ui的基础样式：日历、搜索框等

# highchart  数据统计图表
npm install highcharts --save

*气泡图时，最好封装起来，多个页面引入 import Highcharts from "...." 会出现冲突;

# underscore 处理Date的工具库
let _=require('underscore')

#阿里矢量图

3.H5移动端

# Vux-UI
npm install vux --save

# Rem响应式
*750代表设计稿的宽度，你的设计稿是多少，就写多少;   
*100代表换算比例，这里写100是 为了以后好算:
比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等;

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

```




