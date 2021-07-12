# 调试方法

### 安装依赖

1. npm i lack -g
2. npm i whistle -g

### 调试

1. 进入 whistle.set-fte-cookie 文件夹内部
2. `npm i` 安装所有依赖
3. `lack watch` 监听文件夹改动
4. `npm link` 使得全局 whistle 可以发现此插件
5. `w2 run` 启用 whistle, 如果启动失败，先执行`w2 stop`
6. 在 whistle 的 plugin 界面可以发现 set-fte-cookie 插件，勾选使用
7. 在 whistle 的 rules 界面设置匹配规则，例如 `chatbot.test.shopee.sg set-fte-cookie://`
