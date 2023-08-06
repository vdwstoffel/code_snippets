import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const url = router.query.dynamicFolder; // give access to the dynamic param
  // Should match the folder name
  const goBack = () => {
    router.push("/posts");
  };

  return (
    <>
      <h1>This is a dynamic folder at /{url}</h1>
      <button onClick={goBack}>Back</button>
    </>
  );
}
