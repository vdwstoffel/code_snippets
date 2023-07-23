import { Link } from "react-router-dom";

function Index() {
  return (
    <ul>
      <li>
        <Link to="/usecontext">useContext</Link>
      </li>
      <li>
        <Link to="/redux">Redux</Link>
      </li>
    </ul>
  );
}

export default Index;
