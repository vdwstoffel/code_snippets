import { redirect, useSubmit } from "react-router-dom";

export default function UserForm() {
  const submit = useSubmit();

  const deleteHandler = () => {
    submit(null, { method: "delete" }); // define the method to be used
  };

  return (
    <>
      <button onClick={deleteHandler}>Delete</button>{" "}
      {/* Not part of the form */}
    </>
  );
}

// action function to capture event data
export async function action({ request, params }) {
  const data = await params.event; // should match the dynamic param in App ex path: "/:event"
  console.log(request.method); // get access to the method
  // post request with data

  return redirect("/event"); //redirect to any defiend route
}
