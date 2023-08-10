import "./global.css";

export default function App() {
  const day = false
  return (<h1>
    {day ? 'It is day' : "it is night"}
  </h1>)
}
