# LMink 的博客

这是一个由 Hexo + Diaspora 主题生成的静态博客站点，部署于 GitHub Pages。

## 本地预览

```bash
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 目录

- `index.html`：首页
- `archives/`、`categories/`、`tags/`：归档、分类、标签页面
- `2019/`：文章页面
- `css/`、`js/`：主题样式与交互脚本
- `live2dw/`：Live2D 看板娘资源
- `photoswipe/`：文章图片灯箱资源

## 本次优化

- 修复了全部 HTML 页面的文档结构
- 补齐中文语言、描述、主题色等元信息
- 内链不再强制新窗口打开
- 封面图片尺寸与真实文件对齐
- 移动端禁用 Live2D 并延迟加载桌面端 Live2D
- 增加键盘可用的菜单按钮、焦点样式和“跳到主要内容”入口
- 适配 `prefers-reduced-motion`，减少不必要的动画
