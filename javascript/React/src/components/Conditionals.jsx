function Conditionals() {
  let isLoggedIn = true;

  return (
    <div>
      <h1>{isLoggedIn ? "Logged In" : "Logged Out"}</h1>
    </div>
  );
}

export default Conditionals;
