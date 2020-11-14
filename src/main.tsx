import ReactDOM from 'react-dom'
import Table from './component/table'

const name = 'Jinpei'
const element = (
  <>
    <h1>Hello, {name}</h1>
    <Table />
  </>
)

ReactDOM.render(element, document.getElementById('root'))
