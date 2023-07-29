import axios from "axios";

function Index(props) {
  // receives the data as props argument
  return <h1>{props.swapiData.name}</h1>;
}

export default Index;

// only works in page component files
export async function getStaticProps(context) {
  /*
   * will call the props before calling the component
   * Code in this block never shows on client side
   */
  const params = context;
  console.log(params);

  const response = await axios.get("https://swapi.dev/api/people/1/");
  const peopleData = response.data;
  return { props: { swapiData: peopleData } };
}
