import { useRouter } from "next/router";

function Post() {
  const router = useRouter();
  const url = router.query.postId; // give access to the dynamic param

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

export default Post;
