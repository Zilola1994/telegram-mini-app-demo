# Telegram Mini App デモ

Telegram の Web App（Mini App）として開ける最小構成のサンプルです。HTTPS で公開した URL を Telegram ボットに登録して利用します。

## ファイル構成

- `index.html` — 日本語 UI と Telegram Web App SDK の読み込み
- `style.css` — モバイル向け・テーマ対応スタイル
- `app.js` — `ready()`、`expand()`、ユーザー名表示、アラート、MainButton の設定

## BotFather の設定

1. Telegram で **@BotFather** を開き、`/newbot` を実行してボットを作成します。
2. ` /newapp` を実行し、対象ボットを選択して Mini App を作成します。HTTPS の公開 URL を Web App URL として登録します。
3. 必要に応じて `/setmenubutton` を実行し、ボットのメニューボタンに同じ Web App URL を設定します。

このサンプルにはボットトークンを保存しません。トークンをブラウザ側のコードに書かないでください。

## HTTPS で公開する

### Vercel

プロジェクトディレクトリで次を実行します。

```sh
cd /workspace/telegram-mini-app
npx vercel
```

案内に従ってデプロイし、発行された `https://...` URL を BotFather に登録します。

### Netlify

Netlify CLI を使う場合は次を実行します。

```sh
cd /workspace/telegram-mini-app
npx netlify deploy --prod --dir .
```

ログインやサイト作成を求められたら、Netlify の案内に従ってください。発行された HTTPS URL を BotFather に登録します。

## ローカルで確認する

Telegram Web App として開くには HTTPS の URL が必要です。静的表示だけを確認する場合は、次を実行できます。

```sh
cd /workspace/telegram-mini-app
npx serve .
```

公開後、Telegram で次の形式のリンクを開いてテストします。

```text
https://t.me/<ボットのユーザー名>/<アプリのショートネーム>
```

BotFather でメニューボタンを設定した場合は、ボットチャットのメニューボタンからも開けます。
