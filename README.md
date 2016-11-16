# 土佐ビジネスアカデミー Nextremer Client

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
cd tba-app-client
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

#Cordovaを使ってapkファイルを作成

###1. node.jsがインストールされていることを確認する
```
$ node -v
v 6.2.2

$ npm -v
3.9.5
```

###2. Cordovaのコマンドラインツールをインストールする
```
$ npm install cordova -g
```
cordovaの起動を確認する。
```
$ cordova -v
? May Cordova anonymously report usage statistics to improve the tool over time?
意訳）Cordova改善のため、匿名でユーザーの使用統計を繰り返し取得しますけどいいですか？→ Y（初回のみ聞かれる）
6.4.0
```

###3. Android SDKのインストール
####3.1 Javaのインストール
参考URL
http://ponta666.hatenablog.com/entry/2016/05/29/132931

#####■インストール
```
$ sudo add-apt-repository ppa:webupd8team/java
Oracle Java (JDK) Installer (automatically downloads and installs Oracle JDK7 / JDK8 / JDK9). There are no actual Java files in this PPA.
  :
Press [ENTER] to continue or ctrl-c to cancel adding it
エンターキーを押下

$ sudo apt-get update
$ sudo apt-get install -y oracle-java8-installer
※ライセンス同意にYes
You MUST agree to the license... <Ok>
Do you accept the Oracle Binary Code License terms?  <Yes>
```

#####■確認
```
$ java -version
※Javaのバージョンが表示されればOK
```

####3.2 依存パッケージのインストール
```
$ sudo apt-get install -y libbz2-1.0 lib32z1 lib32ncurses5 lib32stdc++6
```

####3.3 Linux向けAndroid SDKのダウンロード・インストール
```
$ cd
$ wget https://dl.google.com/android/android-sdk_r24.4.1-linux.tgz
$ tar xvzf ~/android-sdk_r24.4.1-linux.tgz
$ sudo apt-get install -y android-tools-adb
```

###4. パスを通してコマンドの確認
####4.1 パスを通す
```
$ echo "export PATH=\$HOME/android-sdk-linux/tools:\$HOME/android-sdk-linux/platform-tools:\$PATH" >> ~/.bashrc
$ source ~/.bashrc
```

####4.2 コマンド実行確認
```
$ android -h

※以下が表示されればOK
Usage:
  android [global options] action [action options]
  Global options:
  :
```
```
$ adb version
Android Debug Bridge version 1.0.32
```

###5. Androidパッケージのインストール
```
$ android
「Android SDK Manager」が起動する。
以下の2つのパッケージだけを選択(その他は選択解除)し、
Tools
 |-  Android SDK Build-tools (Rev 25)
 :
Android 7.0(API24)
|- SDK Platform (Rev 24)

右下の「Install 2 packages」をクリックする。
「Choose Packages to install」が開く

"Accept License"ラジオボタンをチェックすると、"Install"ボタンが有効になるので押下する。

インストールが完了したら、
「Choose Packages to install」
「Android SDK Manager」
を閉じる。
```

###6. プロジェクトを作成する
```
$ cordova create hello com.example.hello HelloWorld -d
$ cd hello
```

###7. Android向けのコンポーネントをインストールする
```
$ cordova platform add android
$ cordova platform add browser
```

###8. ブラウザで確認する
```
$ cordova serve browser

ブラウザで、
http://localhost:8000
にアクセスし、
"browser"
リンクをクリックして確認する。
```

###9. apkファイルの作成
```
$ cordova build
 :
Total time: 18.926 secs
Built the following apk(s):
        /home/vagrant/hello/platforms/android/build/outputs/apk/android-debug.apk

コマンドを実行すると、android-debug.apkが作成される。
```