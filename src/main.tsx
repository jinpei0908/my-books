import ReactDOM from 'react-dom'
import Table from './component/table'
import books from './data/books'

const name = 'Jinpei'
const element = (
  <>
    <h1>Hello, {name}</h1>
    <Table books={books} />
  </>
)

ReactDOM.render(element, document.getElementById('root'))
