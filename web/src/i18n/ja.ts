import languages from "./languages";

const lang = {
  message: {
    hello: "こんにちは、世界",
  },
  menu: {
    top: "Home",
    mypage: "マイページ",
    signin: "ログイン",
    signout: "ログアウト",
    about: "Abount",
  },
  navigation: {
    home: "ホーム",
    about: "About",
    openMenu: "メニューを開く",
  },
  about: {
    title: "このスターターキットについて",
    description:
      "Vue 3、Hono、Cloudflare Workersを組み合わせた本番環境対応のスターターキットです。TypeScript、Tailwind CSS v4、shadcn-vueコンポーネント、Vue I18nによる国際化対応が含まれています。",
    techStack: {
      title: "技術スタック",
      frontend: "フロントエンド: Vue 3.5 + TypeScript + Vite + Tailwind CSS v4",
      backend: "バックエンド: Hono 4.10 on Cloudflare Workers",
      ui: "UI: shadcn-vueコンポーネント (Reka UIベース)",
      i18n: "i18n: Vue I18n (英語・日本語対応)",
    },
    getStarted: {
      title: "始め方",
      step1: "このリポジトリをクローン",
      step2: "'yarn install' で依存関係をインストール",
      step3: "'yarn dev' で開発サーバーを起動",
      step4: "アプリケーションをカスタマイズして構築",
    },
  },
  home: {
    hero: {
      title: "Vue + Hono + Cloudflare",
      subtitle: "モダンなフルスタック・スターターキット",
      description: "高速でスケーラブルなアプリケーションを構築",
      description2: "{emphasize}を使って",
      emphasize: "Vue 3、Hono、Cloudflare Workers",
    },
    features: {
      title: "機能",
      items: [
        "Vue 3 + TypeScript + Tailwind CSS v4",
        "サーバーレスバックエンド向けCloudflare Workers上のHono API",
        "Vue I18nによる国際化(i18n)対応",
      ],
    },
    useCases: {
      title: "最適な用途",
      student: {
        label: "サイドプロジェクト:",
        description: "モダンな技術スタックとベストプラクティスで素早くセットアップ",
      },
      business: {
        label: "本番アプリケーション:",
        description: "エッジコンピューティングとグローバル展開に対応したスケーラブルなアーキテクチャ",
      },
    },
  },
  languages,
};

export default lang;
