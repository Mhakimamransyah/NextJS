import dynamic from "next/dynamic"
import Link from "next/link";

export default function Notes({ notes }) {

  const Layout = dynamic(() => import("... @/layout"))

  return (
    <Layout metaTitle={'Notes'} metaDescription={'All about notes'}>
      {
        (notes?.data?.map(item => {
          return (
            <>
              <Link key={item.id} href={`/notes/${item.id}`} className="mt-6">
                <p>{item.title}</p>
              </Link>
              {item.description}
            </>
          )
        }))
      }
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://simpeg-be.vercel.app/api/v2/notes");
  const notes = await res.json();
  return {
    props: { notes },
  }
}