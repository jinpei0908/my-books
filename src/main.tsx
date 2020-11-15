import { useState } from 'react'
import ReactDOM from 'react-dom'
import Input from './component/input'
import Table from './component/table'
import books from './data/books'

const createRegex = (text: string): string => `.*${text.toLowerCase()}.*`

const RootElement = () => {
  const [value, setValue] = useState('')
  const [filteredBooks, setFilteredBooks] = useState(books)

  return (
    <>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          setFilteredBooks(
            books.filter(
              (book) =>
                book.title.toLowerCase().match(createRegex(e.target.value)) !=
                null
            )
          )
        }}
      />
      <Table books={filteredBooks} />
    </>
  )
}

ReactDOM.render(<RootElement />, document.getElementById('root'))
