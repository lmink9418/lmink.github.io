# LMink 的博客

这是一个基于 [Hexo](https://hexo.io/) 和 [Diaspora](https://github.com/Fechin/hexo-theme-diaspora) 主题的博客仓库。本分支保存 Hexo 源码，发布时会把生成的静态站点推送到 `master` 分支，由 GitHub Pages 提供服务。

线上地址：<https://lmink-ex.github.io/>

## 分支说明

- `hexo`：Hexo 源码分支，文章、页面、主题和配置都在这里编辑。
- `master`：GitHub Pages 使用的静态站点分支，由 `hexo deploy` 自动更新，不要手动编辑。

## 环境要求

- Node.js 14 或更高版本，推荐 Node.js 16+
- npm
- Git，并配置好 GitHub 凭据

## 快速开始

```bash
git clone https://github.com/lmink9418/lmink.github.io.git
cd lmink.github.io
git checkout hexo
npm install
npm run server
```

浏览器打开 <http://localhost:4000> 即可预览博客。

## 目录结构

```text
lmink.github.io/
├── _config.yml                     # 站点全局配置
├── package.json                    # npm 脚本与依赖
├── scaffolds/                      # 新建文章/页面使用的模板
│   ├── post.md
│   ├── page.md
│   └── draft.md
├── source/                         # 博客源码内容
│   ├── _posts/                     # Markdown 文章
│   ├── categories/index.md         # 分类页
│   └── tags/index.md               # 标签云页
└── themes/
    └── diaspora/                   # Diaspora 主题
        ├── _config.yml             # 主题配置
        ├── layout/                 # EJS 页面模板
        └── source/                 # 主题静态资源（CSS、JS、图片等）
```

以下目录由 Hexo 自动生成，已被 `.gitignore` 忽略：

- `public/`：生成后的静态站点
- `.deploy_git/`：部署时使用的临时 Git 仓库
- `db.json`：Hexo 的数据库缓存
- `node_modules/`：npm 依赖

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm run server` | 启动本地预览服务，默认地址 `http://localhost:4000` |
| `npm run new "文章标题"` | 在 `source/_posts/` 新建一篇 Markdown 文章 |
| `npm run build` | 生成静态站点到 `public/` |
| `npm run clean` | 清理 `public/` 和 `db.json` |
| `npm run deploy` | 清理、生成并发布到 `master` 分支 |

端口被占用时可以指定其他端口：

```bash
npm run server -- -p 4001
```

## 写文章

### 新建文章

```bash
npm run new "我的第一篇博客"
```

命令会在 `source/_posts/` 下创建 `我的第一篇博客.md`，然后直接用 Markdown 编辑。

### Front Matter

文章开头使用 YAML 格式的 Front Matter 配置标题、日期、分类和标签：

```yaml
---
title: 我的第一篇博客
date: 2026-08-19 20:00:00
updated: 2026-08-19 20:30:00
categories:
  - 分类1
  - 分类2
tags:
  - 标签1
  - 标签2
cover: /img/welcome-cover.jpg
mp3: https://example.com/music.mp3
autoplay: false
---
```

常用字段说明：

- `title`：文章标题。
- `date`：发布时间，不填时使用文件创建时间。
- `updated`：最后更新时间，默认由文件修改时间决定。
- `categories`：分类，支持嵌套分类。
- `tags`：标签。
- `cover`：文章在首页列表中的封面图，支持本地路径或外链。
- `mp3`：单篇文章指定背景音乐；不填时使用主题配置里的默认音乐列表随机播放。
- `autoplay`：进入文章后是否自动播放音乐。

### 插入图片

静态图片建议放在 `source/images/`，然后在文章里使用根路径引用：

```markdown
![图片说明](/images/example.jpg)
```

### 草稿

创建草稿：

```bash
npx hexo new draft "草稿标题"
```

草稿保存在 `source/_drafts/`，不会出现在正式生成的站点中。本地预览草稿：

```bash
npx hexo server --draft
```

发布草稿时，把文件从 `source/_drafts/` 移动到 `source/_posts/` 即可。

## 页面管理

博客目前包含以下页面：

- `/categories/`：分类页，源码在 `source/categories/index.md`
- `/tags/`：标签云页，源码在 `source/tags/index.md`
- `/archives/`：归档页，由 `hexo-generator-archive` 自动生成

新建独立页面：

```bash
npx hexo new page about
```

新页面生成在 `source/about/index.md`，正文使用 Markdown 编写。如果需要把页面加入顶部菜单，在 `themes/diaspora/_config.yml` 的 `menu` 中添加一行。

## 主题配置

主题配置位于 `themes/diaspora/_config.yml`，主要包含：

- `menu`：顶部导航菜单。
- `links`：页脚社交链接。
- `welcome_cover`：首页大图。
- `cover`：文章默认封面图列表。
- `mp3`：默认背景音乐列表。
- `gitalk`：评论插件配置，目前未启用。
- `local_search`：本地搜索，目前未启用。

站点级配置位于根目录 `_config.yml`，例如站点名称、描述、作者、URL、Feed 和部署目标。

## 部署

```bash
npm run deploy
```

该命令会依次执行：

1. `hexo clean`：清理旧生成文件
2. `hexo generate`：生成新的静态站点
3. `hexo deploy`：把 `public/` 推送到 `master` 分支

部署完成后，GitHub Pages 会自动更新站点，通常几分钟内生效。

如果推送时提示没有权限，请确认本机 Git 已登录 GitHub，并确保当前账号对 `lmink9418/lmink.github.io` 仓库有写权限。

## 常见问题

### 新建文章后线上没有变化

先确认文章日期没有晚于当前时间，且 Front Matter 中没有 `published: false`。然后执行：

```bash
npm run deploy
```

### 生成结果包含已删除的旧页面

清理后重新生成：

```bash
npm run clean
npm run build
```

### npm 安装依赖很慢或超时

可以临时使用国内镜像：

```bash
npm install --registry=https://registry.npmmirror.com
```

### 部署时提示无法连接 GitHub

检查网络后重试：

```bash
git ls-remote origin
npm run deploy
```
