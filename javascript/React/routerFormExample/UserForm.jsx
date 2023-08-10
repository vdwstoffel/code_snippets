import { Form, redirect } from "react-router-dom";

export default function UserForm() {
  return (
    <Form method="POST">
      <h1>Hello</h1>
      <label>Name</label>
      <input type="text" id="name" name="name" />{" "}
      {/* name will be used to identify in the action*/}
      <button>Submit</button>
    </Form>
  );
}

// action function to capture event data
export async function action({ request, params }) {
  const data = await request.formData();
  const userData = {
    username: data.get("name"), //the name attr from the input
  };

  console.log(userData);
  // post request with data

  return redirect("/"); //redirect to any defined route
}
