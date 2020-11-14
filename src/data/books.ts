export interface Book {
  title: string
  isbn: string
  author: string
  publisher: string
  price: number
}

const books: Book[] = [
  {
    title: 'スッキリわかるJava入門',
    isbn: '9784844336389',
    author: '中山清喬, 国本大悟',
    publisher: 'インプレス',
    price: 2600,
  },
  {
    title: 'Real World HTTP : 歴史とコードに学ぶインターネットとウェブ技術',
    isbn: '9784873118048',
    author: '渋川よしき',
    publisher: 'オライリー・ジャパン',
    price: 3400,
  },
]

export default books
