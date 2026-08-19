# hexo-theme-diaspora

## 简介

一款干净，美丽，响应式的 Hexo 主题。

专注呈现图像，适合喜欢创作和记录的你。

干净、清新、响应式，更多好玩等你来发现。

> 感谢 WordPress 主题原作者创作出这么精美的主题 [@Loeify](https://github.com/LoeiFy/Diaspora)。如果你喜欢，请捐助原作者。
>
> 感谢 Hexo 主题原作者创作出这么精美的主题 [@Fechin](https://github.com/Fechin/hexo-theme-diaspora)。如果你喜欢，请捐助原作者。

该项目基于已归档的 Hexo 主题 [hexo-theme-diaspora](https://github.com/Fechin/hexo-theme-diaspora) 继续开发，主要有以下改进：

1. 优化更新 README、配置文件、默认图片
2. 打包为 npm package，方便安装
3. 优化细节（不启用评论时不显示"查看评论"按钮）
4. 修复 Bug（图标显示错误）

## 使用

1. 安装主题：`npm install hexo-theme-diaspora`
2. 修改配置文件 `_config.yml` 的 `theme` 字段为 `diaspora`

## 定制

### 新建文章模板

```markdown
---
title: Title
date: yyyy-mm-dd HH:MM:SS
categories:
  - 分类1
  - 分类2
tags:
  - 标签1
  - 标签2
mp3: http://xxx/xxx.mp3
cover: http://xxx/xxx.jpg
---
```

### 创建分类页

1. 新建一个页面，命名为 categories 。命令如下：

   ```bash
   hexo new page categories
   ```

2. 编辑刚新建的页面，将页面的类型设置为 categories

   ```
   title: categories
   date: yyyy-mm-dd HH:MM:SS
   type: "categories"
   ---
   ```

   主题将自动为这个页面显示所有分类。

### 创建标签页

1. 新建一个页面，命名为 tags 。命令如下：

   ```bash
   hexo new page tags
   ```

2. 编辑刚新建的页面，将页面的类型设置为 tags

   ```
   title: tags
   date: yyyy-mm-dd HH:MM:SS
   type: "tags"
   ---
   ```

   主题将自动为这个页面显示所有标签。

### 创建搜索页

1. 需要安装 hexo 的搜索插件

   ```bash
   npm install hexo-generator-searchdb
   ```

2. 配置 hexo 全局配置文件（请将生成的索引文件放在网站根目录或修改主题 js 文件的 path 值）

   ```yml
   search:
   path: search.xml
   field: post
   format: html
   limit: 10000
   ```

3. 新建一个页面，命名为 search 。命令如下：

   ```bash
   hexo new page search
   ```

4. 编辑刚新建的页面，将页面的类型设置为 search

   ```
   title: search
   date: 2014-12-22 12:39:04
   type: "search"
   ---
   ```

5. 在主题配置文件启用本地搜索

   ```yml
   # 本地搜索,请将索引文件放在网站根目录
   local_search:
   # 是否启用
   enable: true
   ```

   主题将自动为这个页面显示搜索功能。
