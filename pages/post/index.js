import dynamic from "next/dynamic";
import useSWR from "swr";
import fetcher from "../../utils/fetch";

export default function Post() {

  const Layout = dynamic(() => import("... @/layout"))

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);


  return (
    <Layout metaDescription={"All about post"} metaTitle={"Post"}>
      {
        (isLoading) ?
          <p>Loading...</p>
          :
          (error) ? <p>Error happen</p> :
            (data?.map((item) => (
              <div className="mb-4">
                <p>{item.title}</p>
                <p>{item.body}</p>
              </div>
            )))
      }
    </Layout>
  );
}

