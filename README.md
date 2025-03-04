# ワークアウト記録アプリ

シンプルで使いやすいワークアウト記録アプリケーションです。筋トレの記録を簡単に管理できます。

## 主な機能

### 1. ワークアウトの記録

- 複数の種目（エクササイズ）を一度に登録可能
- 各種目に対して複数のセットを記録
- セットごとの重量(kg)と回数を記録
- 直感的な UI で簡単に入力可能

### 2. 履歴の管理

- 記録したワークアウトを時系列で表示
- 日付、種目名、セット数、重量、回数などの詳細を確認可能
- 見やすい履歴一覧でトレーニングの進捗を確認

## プロジェクト構造

```
angular-hono-workout-tracker/
├── src/                      # フロントエンド (Angular)
│   ├── app/
│   │   ├── components/       # UIコンポーネント
│   │   │   ├── workout-form/ # ワークアウト入力フォーム
│   │   │   └── workout-list/ # ワークアウト一覧表示
│   │   ├── models/           # データモデル
│   │   │   └── workout.model.ts
│   │   ├── services/         # APIとの通信を担当
│   │   │   └── workout.service.ts
│   │   ├── app.component.ts  # ルートコンポーネント
│   │   └── app.routes.ts     # ルーティング設定
│   ├── global_styles.css     # グローバルスタイル
│   ├── index.html            # メインHTML
│   └── main.ts               # エントリーポイント
│
├── server/                   # バックエンド (Hono)
│   └── src/
│       ├── routes/           # APIルート
│       │   └── workout.ts    # ワークアウト関連のエンドポイント
│       ├── types/            # 型定義
│       │   └── workout.ts    # ワークアウト関連の型
│       └── index.ts          # サーバーのエントリーポイント
│
├── package.json              # 依存関係とスクリプト
└── tsconfig.json             # TypeScript設定
```

## 技術スタック

### フロントエンド

- Angular 18
- TypeScript

### バックエンド

- Hono
- TypeScript
- Cloudflare Workers

### 開発ツール

- Wrangler
- Concurrently

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm start
```

開発サーバーは `http://localhost:4200/` で起動します。
