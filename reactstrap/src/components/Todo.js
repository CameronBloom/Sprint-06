import { Form, FormGroup, Label, Input, Button } from "reactstrap"

// individual todo: title, description, status (open, closed, cancelled)
export default function Todo(props) {
  return (
    <div className="todo-add">
      <Form>
        <FormGroup>
          <Label for="label-title">
            Todo Title
          </Label>
          <Input
            id="add-title"
            name="title"
            placeholder="todo title"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">
            Todo Description
          </Label>
          <Input
            id=""
            name="text"
            type="textarea"
            placeholder="todo description"
          />
        </FormGroup>
      </Form>
      <Button
        color="primary"
        onClick={() => {
          props.addTodo("dummy-title", "dummy-description");
        }}
      >
        Submit!
      </Button>
    </div>
  )
}