# 廣告排期系統

"廣告排期系統" is a free tool for backstage administration.

## Features

- 左側 sidebar：
    - 正上方是一個 logo 可以被點擊。
    - 下方有三個為一組的 link，當每一個 link 被選取之後（也就是在 active 狀態時），它的 icon 樣式會有所改變。以我們的 mockup 為例，目前 active 的連結會有反白的效果。

- title：Campaign

- table：
    - Header 代表資料的意義
    - 當表單資訊向下滑動時，table header 是固定置頂的，讓使用者可以清楚知道每一個欄位代表什麼資訊。
    - 點選 Action 欄位時會有 popup，彈跳出 Duplicate、Edit 跟 Delete。
    - 當廣告被選擇時，也就是第一欄的 checkbox 被勾選的時候，該 table row 的樣式會有所改變，整行轉為醒目的橘色底色以利辨識

## Environment requirements

-   Node.js v18


## Installation

1. Clone the repository

```
git clone https://github.com/LoS-Light/advertisement.git
```

2. Move to the advertisement directory

```
cd advertisement
```

3. Restore the dependencies

```
$ npm install
$ npm install --save-dev webpack
$ npm install --save-dev webpack-cli
$ npm install --save-dev style-loader
$ npm install --save-dev css-loader
$ npm install sass-loader sass webpack --save-dev
$ npm install --save-dev mini-css-extract-plugin

```

4. Launch the application

```
npm run build
```

In your browser, open index.html to see the website.

## Screenshots

![image](https://github.com/PT-HUANG/advertisement/blob/main/cover.png)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
