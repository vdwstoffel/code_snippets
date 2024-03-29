import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const url = router.query.postId; // give access to the dynamic param
                                  // Should match the file name
  const goBack = () => {
    router.push("/posts");
  };

  return (
    <>
      <h1>{url}</h1>
      <button onClick={goBack}>Back</button>
    </>
  );
}
