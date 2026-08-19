# LMink 的博客（Hexo 源码）

这是博客的 Hexo 源码分支，生成结果会发布到 `master` 分支供 GitHub Pages 使用。

## 本地预览

```bash
npm install
npm run server
```

然后访问 `http://localhost:4000`。

## 发布

```bash
npm run deploy
```

该命令会生成站点并推送到 `master` 分支。

## 写文章

```bash
npm run new "文章标题"
```

文章保存在 `source/_posts/` 下，使用 Markdown 编写。
