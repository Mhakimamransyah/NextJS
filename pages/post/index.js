import dynamic from "next/dynamic";
import { useQueries } from "../../hooks/useQueries";

export default function Post() {

  const Layout = dynamic(() => import("... @/layout"))
  const { res, isLoading, isError } = useQueries('https://jsonplaceholder.typicode.com/posts');


  return (
    <Layout metaDescription={"All about post"} metaTitle={"Post"}>
      {
        (isLoading) ?
          <p>Loading...</p>
          :
          (isError) ? <p>Error happen</p> :
            (res?.map((item) => (
              <div className="mb-4">
                <p>{item.title}</p>
                <p>{item.body}</p>
              </div>
            )))
      }
    </Layout>
  );
}

