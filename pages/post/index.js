import dynamic from "next/dynamic";

export default function Post({ post }) {

  const Layout = dynamic(() => import("... @/layout"))

  return (
    <Layout metaDescription={"All about post"} metaTitle={"Post"}>
      {
        (post?.map((item) => (
          <div className="mb-4">
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        )))
      }
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const post = await res.json()
  return { props: { post } }
}

