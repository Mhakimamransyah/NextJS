import dynamic from "next/dynamic";

export default function NotesDetail({ notes }) {

  const Layout = dynamic(() => import("... @/layout"))

  return (
    <Layout metaDescription={"All about notes detail"} metaTitle={"Notes detail"}>
      {notes?.data?.title}
      <br></br>
      {notes?.data?.description}
    </Layout>
  )
}

export async function getStaticPaths() {

  const res = await fetch(`https://simpeg-be.vercel.app/api/v2/notes`);
  const notes = await res.json();

  const paths = notes.data.map((item) => ({
    params: {
      id: item.id
    }
  }));

  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps(context) {

  const { id } = context.params;

  const res = await fetch(`https://simpeg-be.vercel.app/api/v2/notes/${id}`);
  const notes = await res.json();
  return {
    props: { notes },
    revalidate: 10
  }
}