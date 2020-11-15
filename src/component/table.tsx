import { Book } from '../data/books'

interface Props {
  books: Book[]
}

interface Column {
  id: 'title' | 'isbn' | 'author' | 'publisher' | 'price'
  label: string
  format?: (value: number) => string
}

const columns: Column[] = [
  { id: 'title', label: 'タイトル' },
  { id: 'isbn', label: 'ISBN' },
  { id: 'author', label: '著者' },
  { id: 'publisher', label: '出版社' },
  {
    id: 'price',
    label: '値段',
    format: (value: number) => (value ? `¥${value.toLocaleString()}` : ''),
  },
]

const Table = ({ books }: Props) => (
  <table>
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
                <td key={column.id}>
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
)

export default Table
