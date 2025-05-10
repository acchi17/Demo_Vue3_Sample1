# app-mario-luigi

マリオとルイージをモチーフにした、シンプルなジャンプアクションデモアプリケーションです。

## 機能概要

- 画面に2つのキャラクター（赤と緑）が表示されます
- キャラクターをクリックするとジャンプアニメーションを実行します
- 各キャラクターは異なるジャンプ高さを持っています：
  - 赤キャラクター: 100px
  - 緑キャラクター: 150px

## 技術スタック

- Vue.js 3
- JavaScript (ES6+)
- CSS3 アニメーション

## 開発環境のセットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動（http://localhost:8080/）
npm run serve

# 本番用ビルド
npm run build

# コードの整形とリント
npm run lint
```

## プロジェクト構造

```
src/
├── App.vue                # アプリケーションのルートコンポーネント
├── main.js               # アプリケーションのエントリーポイント
├── assets/               # 画像などの静的アセット
├── classes/              # キャラクタークラス
│   ├── CharaBase.js     # キャラクターの基底クラス
│   ├── GreenChara.js    # 緑キャラクター実装
│   └── RedChara.js      # 赤キャラクター実装
└── components/           # Vueコンポーネント
    ├── CharaView.vue    # キャラクター表示コンポーネント
    ├── GameStage.vue    # ゲームステージコンポーネント
    └── HelloWorld.vue   # サンプルコンポーネント
```

## デプロイ方法

このアプリケーションは、Netlifyを使用して簡単にデプロイできます：

1. GitHubにプロジェクトをプッシュ
2. Netlifyでアカウントを作成し、GitHubと連携
3. 「New site from Git」でリポジトリを選択
4. ビルド設定：
   - Build command: `npm run build`
   - Publish directory: `dist`
5. デプロイボタンをクリック

## カスタマイズ

Vue CLIの設定をカスタマイズする場合は、以下のドキュメントを参照してください：
[Configuration Reference](https://cli.vuejs.org/config/)

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
