import { Book } from '../data/books'

interface Props {
  books: Book[]
}

const Table = ({ books }: Props) => {
  const headers = Object.keys(books[0])
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td>{book[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
