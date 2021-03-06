interface Book {
  title: string
  isbn: string
  author: string
  publisher: string
  price: number
}

interface Column {
  id: 'title' | 'isbn' | 'author' | 'publisher' | 'price'
  label: string
  className?: string
  format?: (value: number) => string
}

interface Props {
  books: Book[]
}

const columns: Column[] = [
  { id: 'title', label: 'タイトル' },
  { id: 'isbn', label: 'ISBN', className: 'text-monospace' },
  { id: 'author', label: '著者' },
  { id: 'publisher', label: '出版社' },
  {
    id: 'price',
    label: '値段',
    format: (value: number) => (value ? `¥${value.toLocaleString()}` : ''),
  },
]

const Table = ({ books }: Props) => (
  <div className={'table-responsive'}>
    <table className={'table text-nowrap'}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => {
          return (
            <tr key={index}>
              {columns.map((column) => {
                const value = book[column.id]
                return (
                  <td
                    key={column.id}
                    className={column.className ? column.className : ''}
                  >
                    {column.format && typeof value === 'number'
                      ? column.format(value)
                      : value}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

export default Table
