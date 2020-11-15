import ReactDOM from 'react-dom'
import Table from './component/table'
import books from './data/books'

const element = (
  <>
    <Table books={books} />
  </>
)

ReactDOM.render(element, document.getElementById('root'))
