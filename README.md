# my-books

## What's this?

自分が所有している技術書を一覧で見られるように作ったページです。実際のページは[こちら](https://jinpei0908.github.io/my-books/)。

## Usage

### データの更新方法

このリポジトリで以下のようなフォーマットでissueを立ててください。

- title: `本追加`
- body: 追加したい書誌のisbnを改行区切りで羅列した文字列

データ追加用のPRが作られます。PRがマージ後、ページにデータが反映されます。

- issueの例: https://github.com/jinpei0908/my-books/issues/30
- PRの例: https://github.com/jinpei0908/my-books/pull/38

## License

このページでは国立国会図書館書誌データを利用しています。また必要に応じてデータの加工・修正を行っています。書誌データ利用について詳しくは[国立国会図書館書誌データ利用ルール](https://www.ndl.go.jp/jp/use/metadata/index.html)をご覧ください。

自分が作成したソースコードのライセンスはMITです。
