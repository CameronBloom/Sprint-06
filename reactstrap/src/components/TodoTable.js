import { Table } from "reactstrap"

// individual todo: title, description, status (open, closed, cancelled)
export default function TodoTable(props) {
  return (
    <Table
      bordered
      hover
      responsive
      size=""
    >
      <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Todo Title
          </th>
          <th>
            Todo Description
          </th>
          <th>
            Todo Status
          </th>
        </tr>
      </thead>
      <tbody>
        {
          props.openTodos.map((todo, index) => {
            return (
              <tr>
                <th scope="row">
                  {index + 1}
                </th>
                <td>
                  {todo.title}
                </td>
                <td>
                  {todo.description}
                </td>
                <td>
                  {todo.status}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}