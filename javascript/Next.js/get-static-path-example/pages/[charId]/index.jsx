import { useRouter } from "next/router";
import axios from "axios";

function Character(props) {
  const router = useRouter();
  const page = router.query.charId;

  return <h1>{props.swapiData.name}</h1>;
}

export default Character;

export async function getStaticPaths() {
  // used with page component that is dynamic with static props
  // Choose which paths should be pre-generated
  return {
    fallback: false, // or 'blocking' or 'true' based on your needs
    paths: [
      {
        params: { charId: "1" },
      },
      {
        params: { charId: "2" },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const charId = context.params.charId; // get access the the dynamic url path

  const response = await axios.get(`https://swapi.dev/api/people/${charId}/`);
  const peopleData = response.data;

  return {
    props: { swapiData: peopleData },
  };
}
