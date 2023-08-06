import axios from "axios";
require("dotenv").config({ path: "../../../.env" });

export default function showItems(props) {
  const firebaseData = props;
  return (
    <>
      <h1>{JSON.stringify(firebaseData.data)}</h1>
    </>
  );
}

// only works in page component files
export async function getStaticProps(context) {
  // since this is run on the server and not shown on the client it is okay to do it like this
  // and no need for api route
  const response = await axios.get(process.env["FIREBASE"]);
  const peopleData = response.data;
  return {
    props: { data: peopleData },
  };
}
