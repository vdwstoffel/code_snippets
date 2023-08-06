import axios from "axios";

export default function Index(props) {
  // receives the data as props argument
  return <h1>{props.swapiData.name}</h1>;
}

// only works in page component files
export async function getServerSideProps(context) {
  // runs on server not client
  // regenerated on every request
  const req = context.req;
  const res = context.res;
  const query = context.query;

  const response = await axios.get("https://swapi.dev/api/people/1/");
  const peopleData = response.data;
  return {
    props: { swapiData: peopleData },
  };
}
