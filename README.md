# 土佐ビジネスアカデミー Nextremer Client

aa

## React.js製のアプリケーション。

# WWW開発環境

## 概要

JavaScript（ES6） -> CommonJSスタイルのモジュールにコンパイル -> Webpackで一個にまとめる。

* 依存ライブラリは npmを利用する(独自ではリポジトリ管理しない）
* srcディレクトリの下を開発ディレクトリとし、成果物をwwwに配置する
* srcディレクトリ以下のhtml/less/jsファイルを変更すると、自動でコンパイル、ビルド、www以下に配置、を行うようにする

## Requirements

* Node.js, npm : jsやlessのコンパイル、依存ライブラリのインストールのために必須です。
* Nodeのバージョンは6.2.2推奨
* Node.jsのバージョン管理マネージャを入れることをオススメします（nodebrew、nvm）

下記コマンドを順次実行します。

```
git clone git@github.com:YosukeSasaoka/tba-app-client.git
npm i
npm run watch

```

## GetStarted

**超大事：ワーキングディレクトリは、リポジトリルート直下のtba-app-clientディレクトリです**

実行後に www/index.html をブラウザで開き、動作していることを確認してください。

## ブラウザで確認
ブラウザはGoogle Chromeを推奨
`http://localhost:3000`にブラウザでアクセスすると、ToDoアプリをブラウザで動かすことができます。

# 開発フロー

### 基本

* masterを最新にする(`git pull origin master`)
* masterからブランチ（topic-xxxx）を切る
* 修正してコミット
* GithubのリポジトリにPUSH
* Github側でPullRequestを送る
    * 競合は修正した人が回避する（原則）
* 誰かに見てもらいたい場合はレビュー依頼
    * 本当は原則２名以上がソースを見る,ということにしたい。

```bash
# ブランチを切る
git checkout -b xxxxx-xxxx-xxxx
git add .
git commit -m "修正内容"
git push origin xxxxx-xxxx-xxxx
```

### 応用 WIP の利用

* とりあえずgithub側のリポジトリにもプッシュしてしまう
* Githubのサイト側でPullRequestを作成(master向け)
    * タイトルには WIP とつけておきましょう( Work In Progress)
    * やることとか、色々書くとよい

#構成内容
React + redux-thunk+ Webpack + ES6 + Babel + CSS Module