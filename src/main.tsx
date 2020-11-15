import ReactDOM from 'react-dom'
import Table, { MyTable } from './component/table'

const element = (
  <>
    <Table />
    <MyTable />
  </>
)

ReactDOM.render(element, document.getElementById('root'))
