import "./global.css";

export default function App() {
  const fruits = ["banana", "maça", "laranja"];

  return (
    <div>
      <h1>Fruits</h1>
      {fruits.map((fruit, idx) => (
        <p key={idx}>{fruit}</p>
      ))}
    </div>
  );
}
